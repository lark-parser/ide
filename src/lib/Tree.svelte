<script lang="ts">
	type Tree = {type: string, data: String, children: Tree[]}

	export let tree: Tree

	let expanded = true
	const toggleExpansion = () => {
		expanded = !expanded
	}
	$: arrowDown = expanded
</script>


<ul><!-- transition:slide -->
	<li>
{#if tree['type'] === 'Tree'}
		{#if tree.children.length > 0}
			<span on:click={toggleExpansion}>
				<span class="arrow" class:arrowDown>&#x25b6</span>
				<span class="label"> 
					{tree.data}
				</span>
			</span>
			{#if expanded}
				<div class="children">
				{#each [...tree.children] as child}
					{#if child}
						<svelte:self tree={child} />
					{:else}
						<span class="empty"></span>
					{/if}
				{/each}
				</div>
			{/if}
		{:else}
			<span>
				<span class="no-arrow"/>
				<span class="label empty"> 
					{tree.data}
				</span>
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
		/* user-select: none; */
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
		display: inline-block;
	}
	.empty::after {
		content: " (empty)";
		color: gray;
		font-style: italic;
		font-weight: normal;
	}
</style>

