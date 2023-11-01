const {model, Schema} = require('mongoose');
const schema = new Schema({
    id: Number,
    title: String,
    image: String,
    hidden: {
        type: Boolean,
        default: false
    }
});
module.exports = model('Category', schema);