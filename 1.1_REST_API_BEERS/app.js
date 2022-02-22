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

let CURRENT_ID = 5;


app.get("/beers", (req, res) => {
    res.send(beers);
});


app.get("/beers/:id",(req, res) => {
    res.send(beers.find(beer => beer.id === parseInt(req.params.id)));
});


app.post("/beers", (req, res) => {
    const beerToAdd = req.body;
    beerToAdd.id = ++CURRENT_ID;
    //beerToAdd.id = Math.max(...beers.map(beer => beer.id))+1;
    beers.push(beerToAdd);
    res.send(beerToAdd);
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
    

    const indexToPatch = beers.findIndex(beer => beer.id === parseInt(req.params.id));

    if(indexToPatch !== -1) {
        const foundBeer = beers[indexToPatch];
        const beerToPatch = req.body;
        const updatedBeer = { ...foundBeer, ...beerToPatch, id: foundBeer.id};
        beers[indexToPatch] = updatedBeer;

        res.send({ data: updatedBeer })
    } else {

    }
    


    /*
    if (indexToPatch !== -1) {
        if (beerToPatch.name !== undefined) {
            if (foundBeer.name !== beerToPatch.name) foundBeer.name = beerToPatch.name;
        } 
        if (beerToPatch.alcohol !== undefined) {
            if (foundBeer.alcohol !== beerToPatch.alcohol)  foundBeer.alcohol = beerToPatch.alcohol;
        }
        res.send(beers[indexToPatch]);
    } else {
        res.send({"message":"nothing to patch"});
    }
    */
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