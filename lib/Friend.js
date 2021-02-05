const mongoose = require('mongoose');

const Friend = mongoose.model('Friend', {
    first_name: {type: String, required: true},
    last_name: {type: String, required: true}
});

module.exports = Friend;
