const router = require("express").Router();

const { calculateAmountOfCoolDinosaurs } = require("../dinosaurs/dinosaurs.js");

router.get("/calculatecooldinosaurs", (req, res) => {
    res.send({ "data": calculateAmountOfCoolDinosaurs})
});

router.get("/amountofcooldinosaurs", (req, res) => {
    res.redirect("/calculatedinosaurs")
})

<<<<<<< HEAD
router.get("/coolestdinosaur", (req, res) => {
=======
router.get("coolestdinosaur", (req, res) => {
>>>>>>> 2d0f7bfda05fe9c91fbd18b8f984f900f4f23921
    if (req.query.cool.toLowerCase() === "yes") {
        return res.send({dinosaur: "Mosasaurus"});
    }
    res.send({ dinosaur: "T. Rex" })
});


<<<<<<< HEAD
=======

>>>>>>> 2d0f7bfda05fe9c91fbd18b8f984f900f4f23921
//module.export = router; Also valid

module.exports = {
    router: router
}

