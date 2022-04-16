<script>
	import { onMount } from "svelte";
	import { baseURL } from "./store/globalStore.js"

	let players = "";

	onMount(async () => {
		const response = await fetch($baseURL + "/players");
		const { data:playersArray } = await response.json();
		players = playersArray;
	});
</script>

<main>
	<h1>Page CONTENT!</h1>
	<h2>{JSON.stringify(players)}</h2>
</main>
<footer>
	{new Date().getFullYear()}
</footer>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		min-height: calc(100vh - 3.7em);
	}

	footer {
		background-color: burlywood;
	}


	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>