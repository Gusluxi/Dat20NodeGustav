<script>
import PeopleTable from "./componments/Table/PeopleTable.svelte";

	export let name;

</script>

<main>
	<PeopleTable />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		background-color: #acd0ff;
	}


	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>