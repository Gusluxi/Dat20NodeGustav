<script>
import Goodbye from "./Goodbye.svelte";

    export let name = "World";
    export let gif;
    export let imgWidth;
</script>

<div id="hello-div">
    <div id="location">I'm a div from the Hello.svelte file</div>
    <h1>Hello {name}!</h1>
    <img width="{imgWidth + 300}px" src="{gif}" alt="Crazy Gif"><br>
    
    <Goodbye name={name}/>
</div>

<style>
    #hello-div {
        background-color: #ccd5ff;
		padding: 1em;
		margin: 0 auto;
    }
    h1 {
        color: #3d3af0;
        font-family: 'Comic Sans MS', cursive;
        font-size: 3em;
    }
    #location {
        text-align: right;
    }

</style>

