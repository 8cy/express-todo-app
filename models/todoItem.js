const mongoose = require('mongoose');

// mongdb entry schema
const todoItemSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    item: {
        type: String,
        required: true
    },
    date: String
});
// export schema
module.exports = mongoose.model('TodoItem', todoItemSchema);