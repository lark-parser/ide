<script>
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

    let editor
    export let text = ""

    const LANGUAGE_CONF = {
	  "comments": {
	      "lineComment": "//"
	  },
	  "brackets": [
	      ["(", ")"],
	      ["[", "]"],
	      ["{", "}"]
	  ], 
	  "autoClosingPairs": [
	      { "open": "(", "close": ")" },
	      { "open": "[", "close": "]" },
	      { "open": "{", "close": "}" },
	      { "open": "/", "close": "/" },
	      { "open": "\"", "close": "\"" }
	  ],
	  "surroundingPairs": [
	      ["(", ")"],
	      ["[", "]"],
	      ["{", "}"],
	      ["/", "/"],
	      ["\"", "\""]
	  ]
	};

    const LANGUAGE = {
	  defaultToken: '',
	  tokenPostfix: '.lark',
	  keywords: [
	  ],
	  brackets: [
	      { open: '{', close: '}', token: 'delimiter.curly' },
	      { open: '[', close: ']', token: 'delimiter.bracket' },
	      { open: '(', close: ')', token: 'delimiter.parenthesis' }
	  ],
	  tokenizer: {
	      root: [
	          { include: '@whitespace' },
	          { include: '@numbers' },
	          { include: '@strings' },
	          [/%(import|ignore|declare|override|extend)/, 'keyword'],
	          [/[\|]/, 'delimiter'],
	          [/[{}\[\]()]/, '@brackets'],
	          [/([a-zA-Z_]*)\s*\:/, 'variable.name'],
	          [/\s*->\s*([a-zA-Z_]*)/, 'variable.name'],
	          [
	              /[a-zA-Z_]\w*/,
	              {
	                  cases: {
	                      '@keywords': 'keyword',
	                      '@default': 'identifier'
	                  }
	              }
	          ]
	      ],
	      // Deal with white space, including single-line comments
	      whitespace: [
	          [/\s+/, 'white'],
	          [/(^\/\/.*$)/, 'comment'],
	      ],
	      // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
	      numbers: [
	          [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, 'number.hex'],
	          [/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, 'number']
	      ],
	      // Recognize strings, including those broken across lines with \ (but not without)
	      strings: [
	          [/'$/, 'string.escape', '@popall'],
	          [/'/, 'string.escape', '@stringBody'],
	          [/"$/, 'string.escape', '@popall'],
	          [/"/, 'string.escape', '@dblStringBody']
	      ],
	      stringBody: [
	          [/[^\\']+$/, 'string', '@popall'],
	          [/[^\\']+/, 'string'],
	          [/\\./, 'string'],
	          [/'/, 'string.escape', '@popall'],
	          [/\\$/, 'string']
	      ],
	      dblStringBody: [
	          [/[^\\"]+$/, 'string', '@popall'],
	          [/[^\\"]+/, 'string'],
	          [/\\./, 'string'],
	          [/"/, 'string.escape', '@popall'],
	          [/\\$/, 'string']
	      ]
	  }
	};


	let container;
	  const monaco_options = {
	    value: text,
	    language: "lark",
	    automaticLayout: true,
	  };

	onMount(() => {
		require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs' }});
		require(["vs/editor/editor.main"], (monaco) => {

			monaco.languages.register( {
			    id: 'lark',
			    extensions: ['.lark'],
			    aliases: ['Lark', 'lark'],
			    firstLine: '^#!/.*\\bpython[0-9.-]*\\b',
			    configuration: './lark.js',
			});	

			monaco.languages.setMonarchTokensProvider('lark', LANGUAGE)

			monaco.languages.setLanguageConfiguration('lark', LANGUAGE_CONF)

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

