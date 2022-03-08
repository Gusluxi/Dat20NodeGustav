

fetch("/calculatecooldinosaurs")
.then(response => response.json())
.then(coolDinosaurs => {


    const coolDinosaursElement = document.getElementById("cool-dinosaurs");
    coolDinosaursElement.innerText = coolDinosaurs.data
})