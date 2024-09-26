const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true, // Corrected from 'require' to 'required'
    },
    email: {
        type: String,
        required: true, // Corrected from 'require' to 'required'
    },
    password: {
        type: String,
        required: true, // Corrected from 'require' to 'required'
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

const UserModel = mongoose.model('Users', UserSchema);
module.exports = UserModel;
