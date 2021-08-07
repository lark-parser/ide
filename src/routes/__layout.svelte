<script lang="ts">
	import '../app.css';

	let fullscreen = false

	function openFullscreen() {
	  let elem = document.getElementsByTagName('body')[0]
	  if (elem.requestFullscreen) {
	    elem.requestFullscreen();
	  } else if (elem.webkitRequestFullscreen) { /* Safari */
	    elem.webkitRequestFullscreen();
	  } else if (elem.msRequestFullscreen) { /* IE11 */
	    elem.msRequestFullscreen();
	  }

	  fullscreen = true
	}

	function closeFullscreen() {
	  if (document.exitFullscreen) {
	    document.exitFullscreen();
	  } else if (document.webkitExitFullscreen) { /* Safari */
	    document.webkitExitFullscreen();
	  } else if (document.msExitFullscreen) { /* IE11 */
	    document.msExitFullscreen();
	  }

	  fullscreen = false
	}
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
			{#if fullscreen}
			<button on:click={closeFullscreen}>exit full screen</button>
			{:else}
			<button on:click={openFullscreen}>full screen</button>
			{/if}
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
		text-align: right;
		margin: var(--base-margin);
	}


</style>
