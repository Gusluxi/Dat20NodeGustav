<script>
    // `current` is updated whenever the prop value changes...
	export let current;

    // ...but `initial` is fixed upon initialisation
    const initial = current;
</script>
<p>
    <span style="color:{current}">Initial</span> -
    <span style="color:{initial}">Current</span>
</p>


