<script>
    export let dataArrayObjects;
    export let sortWord;
    $: sortWord;
    function isImage(url) {
        return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
    }
    reSortArray();
    function reSortArray() {
        console.log("Keyword To Sort:", sortWord)
        dataArrayObjects.sort(function(a, b) {
        if (a[sortWord] > b[sortWord]) {return 1;}
        if (a[sortWord] < b[sortWord]) {return -1;}
        return 0;
    });
    }
    
    
</script>

<tbody>
    {#each dataArrayObjects as object}
        <tr>
            {#each Object.values(object) as value}
                {#if isImage(value)}
                    <td><img src="{value}" alt="Avatar"></td>
                {:else}
                    <td>{value}</td>
                {/if}
            {/each}
        </tr>
    {/each}
</tbody>
<h3 on:click={reSortArray}>Word Being sorted: {sortWord}</h3>
<style>
    td {
        border: 1px solid #000000;
        padding: 0.5rem;
    }

    tr:nth-child(odd) {
        background-color: #F8F8F8;
    }

    tr:nth-child(even) {
        background-color: rgb(201, 201, 201);
}
    img {
        width: 3em;
        border: 1px solid #999999
    }
</style>