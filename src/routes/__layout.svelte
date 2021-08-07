<script lang="ts">
	import '../app.css';

</script>

<header>
	<nav>
		<div id="home">
			<a>
				<img src="lark-logo.png" alt="lark logo" />
			</a>
			<a href="https://lark-parser.readthedocs.io/en/latest/" target='_blank'>docs</a>
			<a href="https://github.com/lark-parser/ide" target='_blank'>source</a>
			<a href="https://github.com/lark-parser/lark" target='_blank'>parser</a>
		</div>
		<div id="title">
			Parser IDE
		</div>
		<div id="right-panel">
			&nbsp;
		</div>
	</nav>
</header>

<main>
	<slot />
</main>

<footer>
</footer>

<style>
	main {
		width: 100%;
	}

	#home {
		margin-top: var(--base-margin);
		margin-left: var(--base-margin);
	}
	#home img {
		height: 50px;
	}
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	#title {
		font-size:  40px;
		font-family: sans-serif;
	}
	#right-panel {
		width:  200px;
	}


</style>
