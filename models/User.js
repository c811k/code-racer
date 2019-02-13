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
<<<<<<< HEAD
        type: Schema.Types.ObjectId,
        ref: "Score"
    },
    token: {
        type: String,
        default: null
=======
        type: String
        // type: Schema.Types.ObjectId,
        // ref: "Score"
>>>>>>> 871b3913a0720891d56a6dfd034e4694ef6826d4
    }

});

const User = mongoose.model("User", userSchema);

module.exports = User;