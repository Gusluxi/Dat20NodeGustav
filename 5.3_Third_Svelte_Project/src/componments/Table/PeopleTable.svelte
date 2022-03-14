<script>
    
    import { faker } from '@faker-js/faker';
    import SvelteTableLibrary from './SvelteTableLibrary.svelte';
    import TableHead from './TableHead.svelte';
    import TableRow from './TableRow.svelte';

    const randomPeople = [];
    let keyword = "name";
    $: keyword;
    function changedWord(event) {
        keyword = event.detail.keyword;
        console.log(keyword)
    };

    generateFakePeople(10);

    function generateFakePeople(amountOfPeople) {
        for (let i = 0; i < amountOfPeople; i++) {
            randomPeople.push({
                avatar: faker.image.avatar(),
                name: faker.name.findName(),
                email: faker.internet.email(),
                music: faker.music.genre()
            });
        };
    };

</script>


<h1>People Table</h1>
<p>{keyword}</p>
<table>
    <TableHead 
        dataArrayObjects = {randomPeople} 
        bind:sortingWord = {keyword}
        on:notify="{changedWord}"
    />
    
    <TableRow 
        dataArrayObjects = {randomPeople}
        sortWord = {keyword}
    />
</table>

<SvelteTableLibrary dataRows = {randomPeople}/>

<style>
    table {
        border-collapse: collapse;
        text-align: center;
        margin: auto;
        font-family: Rockwell;
        font-size: 1.2rem;
    }
</style>