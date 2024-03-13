const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    title: { type: String, required: true },
    teamId: { type: Number, required: true },
    event: {type: Schema.Types.ObjectId, ref: 'Event', required: true },
    description: { type: String, required: true },
    institute: { type: String, required: true},
    teamLeadName: { type: String, required: true},
    teamLeadCNIC: { type: String, required: true},
    teamLeadEmailId: {type: String, required: true},
    participants:[{
        name: { type: String, required: true},
        cnic: { type: String, required: true},
        emailAddress: {type: String, required: true},
    },
    ]
});

module.exports = mongoose.model('Teams', teamSchema);