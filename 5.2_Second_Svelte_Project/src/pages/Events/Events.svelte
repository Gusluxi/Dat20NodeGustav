<script>
import InnerEvent from "./InnerEvent.svelte";
import OuterEvent from "./OuterEvent.svelte";

    let mouse = { x: 0, y: 0};

    function handleClick() {
        alert("I can't believe you've broken this button")
    }

    function handleMessage(event) {
        alert(event.detail.text);
    }
</script>

<div on:mousemove="{event => mouse = {
    x: event.clientX,
    y: event.clientY
}}" id="events-div">
    <div id="location">I'm a div from the Events.svelte file</div>
    <p>Your 🖱️ is at position: {mouse.x} x {mouse.y}</p>
    <button on:click|once = {handleClick}>Don't Click Me</button>
    <OuterEvent on:message={handleMessage}/>
</div>

<style>
    #events-div {
        background-color: #bffdff;
		padding: 1em;
		margin: 0 auto;
    }

    #location {
        text-align: right;
    }
</style>