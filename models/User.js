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
    win: Number,
    loss: Number,
    time: {
        type: String
        // type: Schema.Types.ObjectId,
        // ref: "Score"
    }

});

const User = mongoose.model("User", userSchema);

module.exports = User;