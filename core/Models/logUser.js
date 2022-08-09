const mongoose = require('mongoose');
const { Schema } = mongoose;

const newUser = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    doctype: { type: String, required: true },
    document: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

module.exports = mongoose.model('newUser', newUser);