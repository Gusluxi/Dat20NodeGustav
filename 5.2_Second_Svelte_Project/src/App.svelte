<script>
import Events from "./pages/Events/Events.svelte";
import Hello from "./pages/Introduction/Hello.svelte";
import Logic from "./pages/Logic/Logic.svelte";
import Reactivity from "./pages/Reactivity/Reactivity.svelte";

let randomString = "HTML inside some <b>HTML?</b>"
let name;

function handleNameChange() {
	name = document.getElementById("user-name").value;
}
	
let count = 100;

function uselessButtonHandler() {
	document.getElementById("main").style.fontSize = count +"%";
	count += 25;
}

</script>

<main id="main">
	<div id="location">I'm The main tag in the App.svelte file</div>
	<label>
		What is your name?<br>
		<input on:input = {handleNameChange} id="user-name">
	</label>
	
	<Hello 
	name = {name}
	gif = {"https://media.giphy.com/media/SSM6HdOicCahnOZ5hM/giphy.gif"}
	imgWidth = {count}
	/>

	<p>{@html randomString}</p>

	<button on:click = {uselessButtonHandler}>Useless Button?</button>
	

	<Reactivity />
	<h2>Logic</h2>
	<Logic />
	<h2>Events</h2>
	<Events />
</main>
	
<style>
	main {
		background-color: #fcd6d6;
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	#location {
		text-align: right;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>