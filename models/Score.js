var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
    _uesrnameId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    time: Number
});

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;