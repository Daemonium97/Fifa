const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    positition:{
        type: String,
        required: true //json info
    },
    country:{
        type: String,
        required: true
    },
    teamName:{
        type: String,
        required: true
    }


})

module.exports = mongoose.model('players', playerSchema)