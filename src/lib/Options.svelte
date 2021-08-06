<script>
	export let options

	let parser


	$: options && optionsChanged()

	function optionsChanged() {
		parser = options.parser
	}

	function parserChanged(event) {
		options = {...options, parser: event.target.value}
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
 		</div>

	<style>

		.option {
			display: flex;
			align-items: flex-start;
		}

	</style>