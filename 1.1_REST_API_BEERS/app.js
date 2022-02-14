const express = require("express");
const app = express();
app.use(express.json());

const beers = [
    {
        "id": 1,
        "name": "Carlsberg Pilsner",
        "alcohol": 4.6
    },
    {
        "id": 2,
        "name": "Tuborg Classic",
        "alcohol": 4.6
    },
    {
        "id": 3,
        "name": "Anarkist Brown Ale",
        "alcohol": 6.3
    },
    {
        "id": 4,
        "name": "Grimbergen Double Ambrée",
        "alcohol": 6.5
    },
    {
        "id": 5,
        "name": "Tuborg Julebryg",
        "alcohol": 5.6
    }
];

app.get("/beers", (req, res) => {
    res.send(beers);
});


app.get("/beers/:id",(req, res) => {
    res.send(beers.find(beer => beer.id === parseInt(req.params.id)));
});

app.post("/beers", (req, res) => {
    beers.push(req.body);
    res.send(req.body);
});

app.put("/beers/:id", (req, res) => {
    const beerToReplace = req.body;
    beerToReplace.id = parseInt(req.params.id);

    const indexToReplace = beers.findIndex(beer => beer.id === parseInt(req.params.id));
    if (indexToReplace !== -1) {
        beers[indexToReplace] = beerToReplace;

        res.send(beers[indexToReplace]);
    } else {
        res.send({"message":"nothing to replace"});
    }
    
});

app.patch("/beers/:id", (req, res) => {
    const beerToPatch = req.body;
    beerToPatch.id = parseInt(req.params.id);

    const indexToPatch = beers.findIndex(beer => beer.id === parseInt(req.params.id));

    if (indexToPatch !== -1) {
        if (beerToPatch.name !== undefined) {
            if (beers[indexToPatch].name !== beerToPatch.name) beers[indexToPatch].name = beerToPatch.name;
        } 
        if (beerToPatch.alcohol !== undefined) {
            if (beers[indexToPatch].alcohol !== beerToPatch.alcohol)  beers[indexToPatch].alcohol = beerToPatch.alcohol;
        }
        res.send(beers[indexToPatch]);
    } else {
        res.send({"message":"nothing to patch"});
    }
    
});

app.delete("/beers/:id", (req, res) => {
    const indexToDelete = beers.findIndex(beer => beer.id === parseInt(req.params.id));
    if (indexToDelete !== -1) {
        beers.splice(indexToDelete, 1);
        res.send({"message":"deletíon succesful"})
    } else {
        res.send({"message":"nothing to delete"});
    }
});

app.listen(8080);