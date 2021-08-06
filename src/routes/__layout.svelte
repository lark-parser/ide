<script lang="ts">
	import '../app.css';

</script>

<header>
	<nav>
		<div id="home">
			<a href="/">
				<img src="/lark-logo.png" />
			</a>
		</div>
		<div id="title">
			IDE
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
