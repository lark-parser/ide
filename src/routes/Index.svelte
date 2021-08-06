<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Editor from '$lib/Editor.svelte'
	import init_python from '../python.js'

	const grammars = [
			{
				title: "(easy) Hello World",
				name: 'hello',
				text: 'Hello, World!',
			},
			{
				title: "(easy) JSON parser",
				name: 'json',
				text: '{"this": ["is", "JSON"]}',
			},
			{
				title: "(easy) Calculator",
				name: 'calc',
				text: '20 / (13 - 6) + 1',
			},
		]

	let {grammar, options, text} = grammars[0]

	let parser_promise
	let result_promise
	let create_parser = "parser = lark.Lark(grammar, **options.to_py())"

	let pyodide
	let pyodide_log = []

	async function editor_ready() {
		load_grammar()

		// Load pyocide after the editor is done loading
		// If loaded before, they might interfere with each other
		// Probably due to a require() collision
		if (!pyodide) {
			init_python( (p) => {pyodide = p}, (e) => {pyodide_log = [...pyodide_log, e]})
		}
	}

	function update_lark_parser(grammar, options) {
		pyodide.globals.set('grammar', grammar)
		pyodide.globals.set('options', options || {})
		return pyodide.runPythonAsync(create_parser)
	}

	function update_lark_result(text) {
		pyodide.globals.set('text', text)
		return pyodide.runPythonAsync('parser.parse(text)')
	}

	$: lark_promise = pyodide && update_lark_parser(grammar, options)
	$: result_promise = pyodide && lark_promise && update_lark_result(text)

	let grammar_to_load = "hello"
	async function load_grammar() {
		console.log("Loading grammar", grammar_to_load)
		let r = await fetch('/static/grammars/' + grammar_to_load + '.lark')
		if (r.ok) {
			grammar = await r.text()
			for (let g of grammars) 
				if (g.name === grammar_to_load) {
					text = g.text
					break
				}
		}
	}

	let editor
	$: editor && editor.set_text(grammar)
	
</script>

<svelte:head>
	<title>Lark IDE</title>
</svelte:head>

<section id="ide">

	<div id="grammar_pane">
<!-- 		<textarea id="grammar" bind:value={grammar}></textarea>
 -->
 		<Editor id="grammar" bind:this={editor} bind:text={grammar} on:ready={editor_ready}/>
		<div>
			Load grammar:
			<select bind:value={grammar_to_load} on:change="{load_grammar}">
			{#each grammars as g}
				<option value={g.name}>
					{g.title}
				</option>
			{/each}
			</select>
		</div>
	</div>
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
		{#each pyodide_log as e}
			<p>{e}</p>
		{/each}
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

	#grammar_pane {
		grid-area: grammar;
		display: flex;
		flex-direction: column;
	}
	#grammar {
		min-height: 85vh;
		flex-grow: 1;
	}
	#text {
		grid-area: text;
		height: 100px;
	}
	#output {
		grid-area: output;
	}

	textarea, #output, #grammar_pane {
		margin: 20px;
	}
</style>
