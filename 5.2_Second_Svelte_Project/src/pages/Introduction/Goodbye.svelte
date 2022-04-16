<script>
    export let name;
</script>

<div id="goodbye-div">
    <div id="location">I'm a div from the Goodbye.svelte file</div>
    <h2>Goodbye {name}!</h2>
</div>
    
<style>
    h2 {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: #127cc2;
    }
    #goodbye-div {
        background-color: #e6f5ff;
        padding: 1em;
		margin: 0 auto;
    }
    #location {
        text-align: right;
    }
</style>