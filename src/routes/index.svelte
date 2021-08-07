<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Tree from '$lib/Tree.svelte'
	import Editor from '$lib/Editor.svelte'
	import Options from '$lib/Options.svelte'
	import init_python from '../python.js'

	const DEFAULT_OPTIONS = {
		parser: 'earley',
		keep_all_tokens: false
	}
	const PARSER_REFRESH_DELAY = 500

	const grammars = [
			{
				title: "Blank",
				name: 'blank',
				text: '',
			},
			{
				title: "(easy) Hello World",
				name: 'hello',
				text: 'Hello, World!',
			},
			{
				title: "(easy) JSON parser",
				name: 'json',
				text: '{"this": ["is", "JSON"]}',
				options: {parser: 'lalr'},
			},
			{
				title: "(easy) Calculator",
				name: 'calc',
				text: '20 / (13 - 6) + 1',
				options: {parser: 'lalr'},
			},
		]

	let {grammar, options, text} = grammars[1]
	options = options || DEFAULT_OPTIONS

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

	function update_lark_parser() {
		pyodide.globals.set('grammar', grammar)
		pyodide.globals.set('options', options)
		parser_promise = pyodide.runPythonAsync(create_parser)
	}

	let parserRefreshDelay;
	function delayed_update_lark_parser() {
		clearTimeout(parserRefreshDelay);
		parserRefreshDelay = setTimeout(update_lark_parser, PARSER_REFRESH_DELAY);
	}

	function update_lark_result(text) {
		pyodide.globals.set('text', text)
		return pyodide.runPythonAsync('parser.parse(text)')
	}

	$: pyodide && options && update_lark_parser()
	$: pyodide && grammar && delayed_update_lark_parser()
	$: result_promise = pyodide && parser_promise && update_lark_result(text)

	let grammar_to_load = "hello"
	async function load_grammar() {
		console.log("Loading grammar", grammar_to_load)
		if (grammar_to_load === 'blank') {
			text = ''
			grammar = ''
			editor.set_text('')
			options = DEFAULT_OPTIONS
			return;
		}

		let r = await fetch('grammars/' + grammar_to_load + '.lark')
		if (r.ok) {
			grammar = await r.text()
			editor.set_text(grammar)
			for (let g of grammars) 
				if (g.name === grammar_to_load) {
					text = g.text
					options = g.options || DEFAULT_OPTIONS
					break
				}
		}
	}

	let editor
	
</script>

<svelte:head>
	<title>Lark IDE</title>
</svelte:head>

<section id="ide">

	<div id="grammar_pane">
<!-- 		<textarea id="grammar" bind:value={grammar}></textarea>
 -->
 		<div id="options">
	 		<Options bind:options={options}/>
	 	</div>
		<div id="load-grammar">
 			<div class="option">
 				<div> Load Grammar: </div>
				<select bind:value={grammar_to_load} on:change="{load_grammar}">
				{#each grammars as g}
					<option value={g.name}>
						{g.title}
					</option>
				{/each}
				</select>
			</div>
		</div>
		<Editor id="grammar" bind:this={editor} bind:text={grammar} on:ready={editor_ready}/>
	</div>
	<textarea id="text" bind:value={text}></textarea>

	<div id="output">
	{#if pyodide}
		{#await parser_promise}
			Building Parser...
		{:then}
			{#await result_promise}
				Parsing...
			{:then result}
				{#if result}
					<Tree tree={result} />
				{:else}
					No result
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
		Please wait, loading...
		<ul>
		{#each pyodide_log as e}
			<li>{e}</li>
		{/each}
		</ul>
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
		overflow-x: scroll;
	}

	textarea, #output, #grammar_pane {
		margin: 20px;
	}

	#options {
		margin-bottom: 10px;
		padding: 5px;
	}

	#load-grammar {
		margin-bottom: 10px;
		padding: 5px;
	}
	#load-grammar select {
		background: #eee;
		margin-left:  10px;
	}

		.option {
			display: flex;
			align-items: flex-start;
		}



</style>
