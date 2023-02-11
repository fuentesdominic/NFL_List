const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Team = new Schema(
    {
        team: {type: String, required: true},
        conference: {type: String, required: true},
        division: {type: String, required: true},
        location: { type: String, required: true },
        stadium: { type: String, required: true },
        capacity: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('Team', Team)