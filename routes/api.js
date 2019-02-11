const router = require("express").Router();
const db = require("../models");

router.get("/api/scores", (req, res) => {
    db.Score.find({}).then( (data) => {
        res.json(data);
    }).catch( (err) => {
        res.json(err);
    });;
});

router.get("/api/users", (req, res) => {
    db.User.find({}).then( (data) => {
        res.json(data);
    }).catch( (err) => {
        res.json(err);
    });
});

router.post("/api/user", (req, res) => {
    db.User.create(req.body).then( ()=> {
        res.end();
    }).catch( (err) => {
        res.json(err);
    });
});

router.post("/api/user/:id", (req, res) => {
    db.Score.create(req.body).then( (dbScore) => {
        return db.User.findOneAndUpdate({
            _id: req.params.id 
        }, {
            $push: { scores: dbScore._id }
        }, {
            new: true
        });
    }).then( (dbUser) => {
        res.json(dbUser);
    }).catch( (err) => {
        res.json(err);
    });
});

router.delete("/api/user/:id", (req, res) => {
    db.User.findOneAndDelete({
        _id: req.params.id
    }).then( (data) => {
        res.json(data);
    }).catch( (err) => {
        res.json(err);
    });
});

module.exports = router;