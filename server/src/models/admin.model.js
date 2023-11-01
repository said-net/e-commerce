const {Schema, model} = require('mongoose')
const schema = new Schema({
    name: String,
    username: {
        type: String,
        unique: true
    },
    password: String,
    access: String,
});
module.exports = model('Admin', schema);