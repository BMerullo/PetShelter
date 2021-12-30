const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({


    name: {
        type: String, 
        required: [true, "Pet name is required!"],
        minLength: [3, "Name must be at least 3 characters long!"]
        
    },

    type: { 
        type: String,
        required: [true, "Pet type is required!"],
        minLength: [3, "Pet type must be at least 3 characters long!"]
    },

    description: {
        type: String,
        required: [true, "Pet description is required!"],
        minLength: [3, "Description must be at least 3 characters long!"]
    },

    skill: {
        type: String
    },

    skillTwo: {
        type: String
    },

    skillThree: {
        type: String
    }


    

}, {timestamps: true});

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;
