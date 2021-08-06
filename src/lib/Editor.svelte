<script>
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

    let editor
    export let text = ""

	let container;
	  const monaco_options = {
	    value: text,
	    language: "ruby",
	    automaticLayout: true,
	  };

	onMount(() => {
	  require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs' }});
	  require(["vs/editor/editor.main"], (monaco) => {


	      editor = monaco.editor.create(container, monaco_options);
  		  text = editor.getModel().getValue()

	      editor.getModel().onDidChangeContent((event) => {
	      		text = editor.getModel().getValue()
		  });

			dispatch('ready', {});
	  });
	});

	export function set_text(text) {
		if (editor) return editor.getModel().setValue(text)
	}

		// registerLanguage({
		//     id: 'lark',
		//     extensions: ['.lark'],
		//     aliases: ['Lark', 'lark'],
		//     firstLine: '^#!/.*\\bpython[0-9.-]*\\b',
		//     loader: function () { return import('./lark.js'); }
		// });


</script>

<div
	bind:this={container}
	style="height: 80vh; border: 1px solid grey" />

