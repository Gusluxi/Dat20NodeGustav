<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function sayYo() {
        dispatch("message", {
            text: "Yo!!!"
    });
}
</script>

<button on:click={sayYo}>
	Click to say Yo
</button>