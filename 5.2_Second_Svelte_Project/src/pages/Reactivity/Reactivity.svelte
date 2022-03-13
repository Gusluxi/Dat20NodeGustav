<script>
    let count = 0;

    $: double = count * 2;
    $: quadrouple = count * 4;
    $: octuple = count * 8;
    $: sexdecuple = count * 16;
    $: duotrigintuple = count * 32;

    $: if (count === 42) {
        alert("That's the meaning of life... I think?")
    }
    function handleClick() {
            count += 1;
    }
</script>

<div id="react-div">
    <div id="location">I'm a div from the Reactivity.svelte file</div>
    
    <h2>What's the meaning of life?</h2>
    <button on:click={handleClick}>Clicked: {count} {count === 1 ? "time" : "times"}</button>
    <p>double: {count} * 2 = {double} </p>
    <p>quadrouple: {count} * 4 = {quadrouple}</p>
    <p>octuple: {count} * 8 = {octuple}</p>
    <p>sexdecuple: {count} * 16 = {sexdecuple}</p>
    <p>duotrigintuple: {count} * 32 = {duotrigintuple}</p>

    
</div>



<style>
    #react-div {
        background-color: #e3ffd6;
        font-family: 'Courier New', Courier, monospace;
		padding: 1em;
		margin: 0 auto;
    }
    #location {
        text-align: right;
    }
</style>