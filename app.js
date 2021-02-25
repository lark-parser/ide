class app {
  constructor(modules, invocation) {
    this.init(modules, invocation);
  }

  async init(modules, invocation) {
    await languagePluginLoader;
    await pyodide.runPythonAsync("import micropip; micropip.install('lark-parser')");
    await this.fetchSources(modules);
    await pyodide.runPythonAsync("import " + Object.keys(modules).join("\nimport ") + "\n" + invocation + "\n");

    document.body.classList.remove("is-loading");
  }

  loadSources(module, baseURL, files) {
    let promises = [];

    for (let f in files) {
      promises.push(
        new Promise(async (resolve, reject) => {
          let file = files[f];
          let url = (baseURL ? baseURL + "/" : "") + file;

          const response = await fetch(url, {});
          if (response.status === 200) {
            const code = await response.text();
            let path = ("/lib/python3.7/site-packages/" + module + "/" + file).split("/");
            let lookup = "";
            for (let i in path) {
              if (!path[i]) {
                continue;
              }

              lookup += (lookup ? "/" : "") + path[i];

              if (parseInt(i) === path.length - 1) {
                pyodide._module.FS.writeFile(lookup, code);
                console.debug(`fetched ${lookup}`);
              } else {
                try {
                  pyodide._module.FS.lookupPath(lookup);
                } catch {
                  pyodide._module.FS.mkdir(lookup);
                  console.debug(`created ${lookup}`);
                }
              }
            }
            resolve();
          } else {
            reject();
          }
        })
      );
    }

    return Promise.all(promises);
  }

  async fetchSources(modules) {
    let promises = [];

    for (let module of Object.keys(modules)) {
      promises.push(
        new Promise(async (resolve, reject) => {
          var response = await fetch(`${modules[module]}/files.json`, {});
          if (response.status === 200) {
            var list = await response.text();
            let files = JSON.parse(list);

            await this.loadSources(module, modules[module], files);
            resolve();
          } else {
            reject();
          }
        }));
    }

    await Promise.all(promises);
    for (let module_2 of Object.keys(modules)) {
      pyodide.loadedPackages[module_2] = "default channel";
    }
    pyodide.runPython(
      'import importlib as _importlib\n' +
      '_importlib.invalidate_caches()\n'
    );
  }
}

(function () {
  top.app = new app({ "app": "app" }, "import app.app; app.app.start()");
})();
