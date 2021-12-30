const petController = require("../controllers/pets.controller");


module.exports = (app) => {

    app.get("/api/pets", petController.findAllPets);
    app.post("/api/pets", petController.createNewPet);
    app.get("/api/pets/:id", petController.findOnePet);
    app.put("/api/pets/:id", petController.updatePet);
    app.delete("/api/pets/:id", petController.deletePet)
}