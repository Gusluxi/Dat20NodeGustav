<script>
    import io from "socket.io-client";

    const socket = io();

    socket.on("changeTheColor", ({ data }) => {
        document.body.style.backgroundColor = data;
    })

    function changeColor(event) {
        socket.emit("colorChanged", { data: event.target.value })
    }
</script>

<input type="color" on:change={changeColor}>