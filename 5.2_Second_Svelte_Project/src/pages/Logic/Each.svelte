<script>
import Thing from "./Thing.svelte";

    let gifs = [
        { link: "https://media.giphy.com/media/eoxomXXVL2S0E/giphy.gif", name: "You Win" },
        { link: "https://media.giphy.com/media/JuFwy0zPzd6jC/giphy.gif", name: "da3qqqqqqqqqqqqqqqqqqqqqq"},
        { link: "https://media.giphy.com/media/4pMX5rJ4PYAEM/giphy.gif", name: "Disappearing Homer Simpson"}
    ]

    let things = [
        { id: 1, color: 'darkblue' },
		{ id: 2, color: 'indigo' },
		{ id: 3, color: 'deeppink' },
		{ id: 4, color: 'salmon' },
		{ id: 5, color: 'gold' }
    ];

    function delOnClick() {
		things = things.slice(1);
	}
</script>

<h2>Cool Gifs</h2>
<div id=gif-div>
    {#each gifs as gif}
    <div>
        <p>{gif.name}</p>
        <img src="{gif.link}" alt="{gif.name}">
    </div>
    {/each}
</div>

<button on:click={delOnClick}>Remove First Item</button>
    
<div id=things-div>
    <div>
        <h3>Keyed</h3>
        {#each things as thing (thing.id)}
            <Thing current={thing.color}/>
        {/each}
    </div>
    <div>
        <h3>UnKeyed</h3>
        {#each things as thing}
            <Thing current={thing.color}/>
        {/each}
    </div>
</div>



<style>
    #gif-div {
        display: flex;
        justify-content: space-evenly;
    }

    #things-div {
        display: grid; 
        grid-template-columns: 1fr 1fr; 
        grid-gap: 1em;
    }
</style>
