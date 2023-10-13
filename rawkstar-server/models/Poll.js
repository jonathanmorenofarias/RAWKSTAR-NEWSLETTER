const mongoose = require('mongoose');

const Poll = new mongoose.Schema({
    month: {
        type: String, required: true
    },
    vote: [{
        option: {
            type: String, required: true
        },
        amount: {
            type: Number, required: true,
            default: 0
        },
        }],
        other: [{
            type: String, required: false
        }]


    
}, {timestamps: true})

module.exports = mongoose.model('Poll', Poll);