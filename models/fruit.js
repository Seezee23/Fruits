const mongoose = require('mongoose')

// Make A Schema
const fruitSchema = new mongoose.Schema({
    name: { type: String, required: true},
    color: { type: String, required: true},
    readyToEat: Boolean
})


// Make A Model From The Schema

const Fruit = mongoose.model('Fruit', fruitSchema)

// Export The Model For Use  In The App

module.exports = Fruit