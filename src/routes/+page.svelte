<script lang="ts">
	import Tree from '$lib/Tree.svelte'
	import Editor from '$lib/Editor.svelte'
	import EditInput from '$lib/EditInput.svelte'
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
				text: '2 + 20 / (13 - 6) + 1.5',
				options: {parser: 'lalr'},
			},
			{
				title: "(easy) Fruit flies like bananas",
				name: 'fruitflies',
				text: 'fruit flies like bananas',
				options: {ambiguity: 'explicit'},
			},
			{
				title: "(avg) Configuration grammar",
				name: 'conf',
				text: '[main]\nhello=world\n',
				options: {parser: 'lalr'},
			},
			{
				title: "(avg) Lark grammar",
				name: 'lark',
				text: 'start: "Hello" "World"',
				options: {parser: 'lalr', maybe_placeholders: false},
			},
		]

	let grammar = ""
	let text = ""
	let options = DEFAULT_OPTIONS

	let parser_promise
	let result_promise
	let create_parser = "parser = lark.Lark(grammar, **options.to_py())"
	let editor_text: string

	let pyodide: {globals: any, runPythonAsync: (s: string) => any}
	let pyodide_log: string[] = []

	async function editor_ready() {
		load_grammar('hello')

		// Load pyocide after the editor is done loading
		// If loaded before, they might interfere with each other
		// Probably due to a require() collision
		if (!pyodide) {
			init_python( (p) => {pyodide = p}, (e: string) => {pyodide_log = [...pyodide_log, e]})
		}
	}

	function update_lark_parser() {
		pyodide.globals.set('grammar', grammar)
		pyodide.globals.set('options', options)
		parser_promise = pyodide.runPythonAsync(create_parser)
	}

	let parserRefreshDelay: NodeJS.Timeout;
	function update_grammar_from_editor() {
		clearTimeout(parserRefreshDelay);
		parserRefreshDelay = setTimeout(() => {
			grammar = editor_text
		}, PARSER_REFRESH_DELAY);
	}

	function update_lark_result(text) {
		pyodide.globals.set('text', text)
		return pyodide.runPythonAsync('parser.parse(text)')
	}

	$: pyodide && options && grammar && update_lark_parser()

	$: pyodide && editor_text && update_grammar_from_editor()

	$: result_promise = pyodide && parser_promise && update_lark_result(text)

	async function load_grammar(grammar_to_load) {
		console.log("Loading grammar", grammar_to_load)
		if (grammar_to_load === 'blank') {
			grammar = 'start:'
			editor.set_text('')
			edit_input.set_text('')
			options = DEFAULT_OPTIONS
			return;
		}

		let r = await fetch('grammars/' + grammar_to_load + '.lark')
		if (r.ok) {
			grammar = await r.text()
			editor.set_text(grammar)
			for (let g of grammars) 
				if (g.name === grammar_to_load) {
					edit_input.set_text(g.text)
					options = {...DEFAULT_OPTIONS, ...g.options}
					break
				}
		}
	}

	let editor: Editor
	let edit_input: EditInput
	
</script>

<svelte:head>
	<title>Lark IDE</title>
</svelte:head>

<section id="ide">

	<div id="grammar_pane">
 		<div id="above_grammar">
			<div id="load-grammar">
	 			<div class="option">
					<div class="dropdown is-hoverable">
					  <div class="dropdown-trigger">
					    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
					      <span>Load Grammar</span>
					      <span class="icon is-small">
					        <i class="fas fa-angle-down" aria-hidden="true"></i>
					      </span>
					    </button>
					  </div>
					  <div class="dropdown-menu" id="dropdown-menu3" role="menu">
					    <div class="dropdown-content">
						  {#each grammars as g}
					      <a href="#" class="dropdown-item" on:click={() => {load_grammar(g.name)}}>
					        {g.title}
					      </a>
						  {/each}
					    </div>
					  </div>
					</div>
	 	
				</div>
			</div>
	 		<div id="options">
		 		<Options bind:options={options}/>
		 	</div>
		 </div>

		<div id="grammar">
			<Editor bind:this={editor} bind:text={editor_text} on:ready={editor_ready}/>
		</div>
	</div>
	<!-- <textarea id="text" bind:value={text}></textarea> -->
	<div id="text">
		<EditInput bind:this={edit_input} bind:text={text} />
	</div>

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

		<progress class="progress is-info" value={pyodide_log.length} max="4">XX</progress>
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
		grid-template: 
		    "grammar text" min-content
		    "grammar output" 1fr
		        / min-content 1fr;

		flex: 1 1 auto;
	}

	#grammar_pane {
		grid-area: grammar;
		display: flex;
		flex-direction: column;

		resize: horizontal;
		overflow: auto;
		width: 50vw;
	}
	#grammar {
		display: flex;
		flex: 1 1 auto;
	}

	#text {
		grid-area: text;
		height: 100px;
		/* resize:  vertical; */
		display: flex;
	}
	#output {
		grid-area: output;
		overflow-x: scroll;
	}

	#output, #grammar_pane {
		margin: 20px;
	}

	#options {
		margin-bottom: 10px;
		padding: 5px;
	 	margin-left: 20px;
	}

	#load-grammar {
		margin-bottom: 10px;
		padding: 5px;
	}
	.option {
		display: flex;
		align-items: flex-start;
	}

	#above_grammar {
		display: flex;
	}

</style>