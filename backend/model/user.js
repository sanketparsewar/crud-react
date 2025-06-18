const mongoose = require('mongoose')

const UsreSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    }
})

const User = mongoose.model('User', UsreSchema)
module.exports = User;