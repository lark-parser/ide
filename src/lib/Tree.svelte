<script>
	export let tree

	let expanded = true
	const toggleExpansion = () => {
		expanded = !expanded
	}
	$: arrowDown = expanded
</script>


<ul><!-- transition:slide -->
	<li>
{#if tree['type'] === 'Tree'}
		{#if tree.children.length}
			<span on:click={toggleExpansion}>
				<span class="arrow" class:arrowDown>&#x25b6</span>
				<span class="label"> 
					{tree.data}
				</span>
			</span>
			{#if expanded}
				<div class="children">
				{#each [...tree.children] as child}
					<svelte:self tree={child} />
				{/each}
				</div>
			{/if}
		{:else}
			<span>
				<span class="no-arrow"/>
				{tree.data}
			</span>
		{/if}

{:else}

<code>{tree}</code>

{/if}
	</li>
</ul>

<style>
	ul {
		margin: 0;
		list-style: none;
		padding-left: 1.2rem; 
		user-select: none;
	}
	.no-arrow { padding-left: 1.0rem; }
	.arrow {
		cursor: pointer;
		display: inline-block;
		font-size: 0.7rem;
		/* transition: transform 200ms; */
	}
	.arrowDown { transform: rotate(90deg); }

	code {
		color: green;
		font-size: 1.1rem;
		margin-left: 10px;
	}
	.label {
		color: #44c;
		font-family: sans-serif;
	}
</style>

