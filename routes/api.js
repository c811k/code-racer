const router = require("express").Router();
const db = require("../models");
const fs = require("fs");
const path = require("path");

router.get("/api/scores", (req, res) => {
    db.Score.find({}).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });;
});

router.get("/api/users", (req, res) => {
    db.User.find({}).populate("times").then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
});

router.get("/api/users/:time", (req, res) => {
    db.User.find({
        time: req.params.time
    }).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
});

router.post("/api/user", (req, res) => {
    db.User.create(req.body).then(() => {
        res.end();
    }).catch((err) => {
        res.json(err);
    });
});

router.post("/api/user/:id", (req, res) => {
    db.Score.create(req.body).then((dbScore) => {
        return db.User.findOneAndUpdate({
            _id: req.params.id
        }, {
                $push: { times: dbScore._id }
            }, {
                new: true
            });
    }).then((dbUser) => {
        res.json(dbUser);
    }).catch((err) => {
        res.json(err);
    });
});

router.delete("/api/user/:id", (req, res) => {
    db.User.findOneAndDelete({
        _id: req.params.id
    }).then((data) => {
        res.json(data);
    }).catch((err) => {
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