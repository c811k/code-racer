const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    times: {
        type: Schema.Types.ObjectId,
        ref: "Score"
    },
    token: {
        type: String,
        default: null
    }

});

const User = mongoose.model("User", userSchema);

module.exports = User;