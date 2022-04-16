<script>
import Child from "../../componments/Child/Child.svelte";
import Parent from "../../componments/Parent/Parent.svelte";
import { supermarket } from "../../store/supermarket.js";
let stuff;

const parents = [
    {
        key: 1,
        name: "🤱 Ludvig"
    },
    {
        key: 2,
        name: "👨 Kristian"
    }
]

function onFamilyMeetingCalled(name) {
    console.log(stuff);
    console.log("Family Meeting called by " + name);
}

</script>
<h1>This it the home of the Svelte family</h1>

{#each parents as parent (parent.key)}
     <Parent handleFamilyMeetingCall = {onFamilyMeetingCalled} parentName = {parent.name} />
{/each}

<Child 
    handleFamilyMeetingCall = {onFamilyMeetingCalled} 
    stereotype = "black-sheep" 
    childName = "👶 Gustav"
/>
<Child 
    handleFamilyMeetingCall = {onFamilyMeetingCalled} 
    stereotype = "bright-kid" 
    childName = "👶 Michael"
/>
<Child 
    handleFamilyMeetingCall = {onFamilyMeetingCalled} 
    childName = "👶 Ava" 
    isGirl = {true}
    bind:someRandomStuff = {stuff}
/>
<p>{JSON.stringify($supermarket)}</p>