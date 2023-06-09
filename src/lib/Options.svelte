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

		<div class="list">
 			<div class="option">
 				<div class="select">
				  <select bind:value={parser} on:input={parserChanged}>
				    <option value="earley">Parser: Earley</option>
				    <option value="lalr">Parser: LALR(1)</option>
				  </select>
				</div>
			</div>

 			<div class="option">
				<label class="checkbox" for="keep_all_tokens">
	 				<input class="checkbox" type="checkbox" bind:checked={keep_all_tokens} on:input={keepChanged} id="keep_all_tokens">
	 				Keep all tokens
 				</label>
 			</div>
 		</div>

<style>

	.option {
		display: flex;
		align-items: flex-start;
		margin-left: 20px;
		user-select: none;
	}

	.list {
		display: flex;
		flex-flow: wrap;
		justify-content: space-between;
		align-items: center;
	}

</style>