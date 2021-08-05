<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import init_python from '../python.js'

	let grammar = 'start: /\\w/+\n%ignore /\\s+/'
	let options = {}
	let text = "a bunch of words"

	let parser_promise
	let result_promise
	let create_parser = "parser = lark.Lark(grammar, **options.to_py())"

	let pyodide
	if (!pyodide) {
		init_python( (p) => {pyodide = p})
	}

	function update_lark_parser(grammar, options) {
		pyodide.globals.set('grammar', grammar)
		pyodide.globals.set('options', options)
		return pyodide.runPythonAsync(create_parser)
	}

	function update_lark_result(text) {
		pyodide.globals.set('text', text)
		return pyodide.runPythonAsync('parser.parse(text)')
	}

	$: lark_promise = pyodide && update_lark_parser(grammar, options)
	$: result_promise = pyodide && lark_promise && update_lark_result(text)

</script>

<svelte:head>
	<title>Lark IDE</title>
</svelte:head>

<section id="ide">

	<textarea id="grammar" bind:value={grammar}></textarea>
	<textarea id="text" bind:value={text}></textarea>

	<div id="output">
	{#if pyodide}
		{#await lark_promise}
			Building Parser...
		{:then}
			{#await result_promise}
				Parsing...
			{:then result}
				{#if result.type == "Tree"}
					<pre>
					  {result.pretty()}
					</pre>
				{:else}
					{result}
				{/if}
			{:catch e}
				<pre>
					{e}
				</pre>
			{/await}
		{:catch e}
			<pre>
				{e}
			</pre>
		{/await}
	{:else}
		Loading Pyodide...
	{/if}
	</div>
</section>

<style>
	#ide {
		display: grid;
		grid-template-areas: 
		    "grammar text"
		    "grammar output";
	    grid-template-columns: 30% auto;
	    grid-template-rows: 150px auto;
	}

	#grammar {
		grid-area: grammar;
		min-height: 85vh;
	}
	#text {
		grid-area: text;
		height: 100px;
	}
	#output {
		grid-area: output;
	}

	textarea, #output {
		margin: 20px;
	}
</style>
