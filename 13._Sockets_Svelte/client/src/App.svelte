<script>
	import UserRegistration from "./pages/UserRegistration/UserRegistration.svelte";
	import { onMount } from "svelte";
	import Colors from "./pages/Colors/Colors.svelte";
	let username;
	onMount(async () => {
		const response = await fetch("http://localhost:3000/api/fetchUser");
		const { data: usernameResult } = await response.json();
		username = usernameResult;
	});
	console.log(username);
	
</script>

<main>
	{#if username}
		<h1>Welcome {username}</h1>
		<Colors/>
	{:else}
		<h1>User Registration</h1>
		<UserRegistration />
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>