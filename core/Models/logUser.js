const mongoose = require('mongoose');
const { Schema } = mongoose;

const newUser = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    doctype: { type: String, required: true },
    document: { type: Number, required: true },
    password: { type: String, required: true },
});

mongoose.models = {};

module.exports = mongoose.model.newUser || mongoose.model('newUser', newUser);