
export default function init(callback, log) {
  	log && log("Loading Pyodide")

  	require(['https://cdn.jsdelivr.net/pyodide/v0.18.0/full/pyodide.js'], (mod) => {
  		mod.loadPyodide({ indexURL : "https://cdn.jsdelivr.net/pyodide/v0.18.0/full/" }).then( async (pyodide) => {
	  		console.log("Pyodide loaded", pyodide)

	  		log && log("Installing micropip")
	  		await pyodide.loadPackage('micropip')
	  		log && log("Downloading & Installing Lark")
  		    await pyodide.runPythonAsync( "import micropip; await micropip.install('lark');" );
  		    pyodide.runPython( "import lark" );

	  		callback(pyodide)
	  		console.log('Ready!', pyodide)

  		})
  	})
}