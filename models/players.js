const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Player = new Schema(
    {
        name: {type: String, required: true},
        age: { type: String, required: true },
        position: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('Player', Player)