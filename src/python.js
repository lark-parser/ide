
// require(['https://cdn.jsdelivr.net/pyodide/v0.18.0/full/pyodide.js'], (x) => {console.log(x)})

import { onMount } from 'svelte';

export default function init(callback) {
	onMount(async () => {
  	console.log("Loading Pyodide")
  	// let x = await window.require(['https://cdn.jsdelivr.net/pyodide/v0.18.0/full/pyodide.js'])

  	require(['https://cdn.jsdelivr.net/pyodide/v0.18.0/full/pyodide.js'], (mod) => {
  		mod.loadPyodide({ indexURL : "https://cdn.jsdelivr.net/pyodide/v0.18.0/full/" }).then( async (pyodide) => {
	  		console.log("Pyodide loaded", pyodide)

	  		console.log("Installing micropip")
	  		await pyodide.loadPackage('micropip')
	  		console.log("Downloading & Installing Lark")
  		    await pyodide.runPythonAsync( "import micropip; await micropip.install('lark-parser');" );
  		    pyodide.runPython( "import lark" );
  		    console.log(pyodide.runPython( "lark" ));

	  		callback(pyodide)
	  		console.log('Ready!', pyodide)

  		})
  	})
	})
}