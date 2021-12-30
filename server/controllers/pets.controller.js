const Pet = require("../models/pets.model")



module.exports = {

    findAllPets: (req, res) => {
        Pet.find({})
            .then((allPets) => {
                console.log(allPets);
                res.json(allPets)
            })
            .catch((err) => {
                res.json({ message: "Something went wrong in findAllPets", error: err });
            })
    },

    findOnePet: (req, res) => {
        Pet.findOne({ _id: req.params.id })
            .then((onePet) => {
                console.log(onePet)
                res.json(onePet)
            })
            .catch((err) => {
                console.log("findOnePet failed")
                res.json({ message: "Something went wrong in findOnePet", error: err });
            })
    },

    createNewPet: (req, res) => {
        Pet.create(req.body)
            .then((newPet) => {
                console.log(newPet);
                res.json(newPet);
            })
            .catch((err) => {
                console.log("Something went wrong in createNewPet");
                res.status(400).json(err)
            })
    },

    updatePet: (req, res) => {
        Pet.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true}
        )
            .then((updatedPet) => {
                console.log(updatedPet);
                res.json(updatedPet);
            })
            .catch((err) => {
                res.status(400).json(err);
                res.json({ message: "Something went wrong in updatePet", error: err});
            })
    },

    deletePet: (req, res) => {
        Pet.deleteOne({ _id: req.params.id })
            .then((deletedPet) => {
                console.log(deletedPet)
                res.json(deletedPet)
            })
            .catch((err) => {
                console.log("deletePet failed")
                res.json({ message: "Something went wrong with deletePet", error: err });
            })
    },
}
