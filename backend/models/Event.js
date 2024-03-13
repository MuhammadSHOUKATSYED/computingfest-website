const mongoose = require('mongoose')
const Schema = mongoose.Schema


const eventSchema = new Schema({

    title:{type: String, required: true},
    eventId: {type: Number, required: true},
    category:{type: String, required: true},
    description: {type: String, required: true},
    participants: {type: Number, required: true},
    date: {type: String, required: true},
    time: {type: String, required: true},
    location: {type: String, required: true},
    eventHead: {type: String, required: true},
    eventHeadEmail: {type: String, required: true},
})


module.exports = mongoose.model('Events', eventSchema);