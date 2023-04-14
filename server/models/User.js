const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: {type : String, required: true, unique: true},
        email: {type : String, required: true, unique: true},
        firstname: {type : String, required: true, unique: false},
        lastname: {type : String, required: true, unique: false},
        phone: {type : String, required: true, unique: true},
        password: {type : String, required: true},
        isAdmin: {type : Boolean, required: true, default: false},
    },
    {timestamps: true}
)

module.exports = mongoose.model("User", UserSchema);