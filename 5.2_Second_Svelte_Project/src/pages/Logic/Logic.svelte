<script>
import Each from "./Each.svelte";

    let powerStatus = { powerOn: false };

    function powerSwitch() {
        powerStatus.powerOn = !powerStatus.powerOn; //Equals the opposite when called
        if (powerStatus.powerOn) {
            document.getElementById("logic-div").style.backgroundColor = "#faf5b2";
            document.getElementById("logic-div").style.color = "black";
        } else {
            document.getElementById("logic-div").style.backgroundColor = "#868461";
            document.getElementById("logic-div").style.color = "white";
        }
            
    }
</script>

<div id="logic-div">
    <div id="location">I'm a div from the Logic.svelte file</div>
    <h2>Power Switch</h2>

    {#if powerStatus.powerOn}
        <button on:click={powerSwitch}>Turn Power Off ⚡</button>
    {:else}
        <button on:click={powerSwitch}>Turn Power On 🔌</button>
    {/if}

    <Each />
</div>

<style>
    #logic-div {
        background-color: #868461;
		padding: 1em;
		margin: 0 auto;
        color: white;
    }

    #location {
        text-align: right;
    }
</style>