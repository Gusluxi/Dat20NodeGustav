const { coolDinosaurs } = require("./dinosaurs.json")

function amountOfCoolDinosaurs() {
    return coolDinosaurs.length;
};

module.exports = {
    calculateAmountOfCoolDinosaurs: amountOfCoolDinosaurs
}