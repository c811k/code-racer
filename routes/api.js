const router = require("express").Router();
const User = require("../models/User");
const fs = require("fs");
const path = require("path");

router.get("/api/users", (req, res) => {
    User.find({"time": {"$exists": true }}).sort({time: 1}).limit(4).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
});

router.get("/api/users/:name", (req, res) => {
    User.find({
        username: req.params.name
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    })
});

router.get("/api/users/:time", (req, res) => {
    User.find({
        time: req.params.time
    }).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
});

router.post("/api/user", (req, res) => {
    User.create(req.body).then(() => {
        res.end();
    }).catch((err) => {
        res.json(err);
    });
});

router.put("/api/user/:username/:time", (req, res) => {
    User.findOneAndUpdate({
        username: req.params.username
    }, { 
        $set: {time: req.params.time}
    }, {
        new: true
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    });
});

router.get("/api/prompt/:promptName", (req, res) => {
    if (req.params.promptName) {
        var promptName = req.params.promptName;
    } else {
        promptName = "forLoop";
    }
    fs.readFile(path.join(__dirname, "../client/src/components/prompts/" + promptName + ".js"), 'utf-8', function (err, data) {
        res.send(data);
    });
});

module.exports = router;