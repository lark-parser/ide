<script>
	export let options

	let parser
	let keep_all_tokens

	$: options && optionsChanged()

	function optionsChanged() {
		parser = options.parser
		keep_all_tokens = options.keep_all_tokens
	}

	function parserChanged(event) {
		setTimeout(() => {
			options = {...options, parser}
		})
	}
	function keepChanged(event) {
		setTimeout(() => {
			options = {...options, keep_all_tokens}
		})
	}

</script>

		<div id="options">
 			<div class="option">
 				<div> Parser: </div>
	 			<div>
				  <input type="radio" id="earley" name="parser" on:input={parserChanged} bind:group={parser} value="earley" checked />
				  <label for="earley">Earley</label>
				</div>

				<div>
				  <input type="radio" id="lalr" name="parser" on:input={parserChanged} bind:group={parser} value="lalr" />
				  <label for="lalr">LALR(1)</label>
				</div>
			</div>
 			<div class="option">
 				<input type="checkbox" bind:checked={keep_all_tokens} on:input={keepChanged} id="keep_all_tokens">
				<label for="keep_all_tokens">Keep all tokens</label>
 			</div>
 		</div>

<style>

	.option {
		display: flex;
		align-items: flex-start;
	}

	#options {
		display: flex;
		justify-content: space-between;

	}

</style>