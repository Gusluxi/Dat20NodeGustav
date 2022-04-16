<script>
    export let parentName = "No name Johnny";
    export let handleFamilyMeetingCall;

</script>

<h2>Hi this is the parent <b on:click={handleFamilyMeetingCall(parentName)}>{parentName}</b></h2>