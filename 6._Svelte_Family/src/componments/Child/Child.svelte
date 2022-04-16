<script>
    export let childName;
    export let stereotype = "";
    export let isGirl = false;
    export let handleFamilyMeetingCall;
    export const someRandomStuff = "Hello";
    import { supermarket } from "../../store/supermarket.js";

    function eatCandy() {
        supermarket.update(storeValue => {
            if (storeValue.candy > 0) storeValue.candy -= 1;
            return storeValue;c
            //OR you can do this: $supermarket.candy--
        });
    }
</script>

<div 
    class:girly={isGirl} 
    class={stereotype || "beyond-any-stereotype"}>
    <h3>Hi, I am 
        <b on:click={handleFamilyMeetingCall(childName)}>
            {childName}
        </b>
    </h3>

    <h1>This is the online portal for the supermarket</h1>
    <button on:click={eatCandy}>Eat candy</button>
    <div>Pieces of candy is in the store {$supermarket.candy}</div>
    
</div>

<style>
    .girly {
        background-color: cornflowerblue;
    }

    .black-sheep {
        background-color: black;
        color: white;
    }

    .bright-kid {
        background-color: orange;
    }
</style>