<script>
import Apple from "./Apple.svelte";

    let apples = ["🍎", "🍏", "🖊️", "🍍"];

    function pickApple() {
        apples.pop();
        apples = apples;
    };
</script>

<div id="leaves">
    <h2>I'm a tree c:</h2>

    {#each apples as apple}
    <Apple appleEmoji={apple} />

    {/each}
    
    <button on:click={pickApple}>Pick an apple</button>
</div>
<div id="trunk">

</div>

<style>
    #leaves {
        background-color: #07d623;
        width: 70%;
        margin: auto;
    }

    #trunk {
        background-color: #6e480e;
        width: 5%;
        height: 300px;
        margin: auto;
    }
</style>