<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let dataArrayObjects;
    export let sortingWord = "name";

 
    const sort = word => () => {
        dispatch('notify', {
            keyword: word
        });
        sortingWord = word;
    }

</script>

<thead>
    <tr>
        {#each Object.keys(dataArrayObjects[0]) as dataKey}
            <th on:click={sort(dataKey.toString())}>{dataKey.toString().toUpperCase()}</th>
        {/each}
    </tr>
</thead>

<style>
    th {
        border: 1px solid #000000;
        padding: 0.5rem;
        color:#fff;
        background-color: #378dff;
    }
</style>
