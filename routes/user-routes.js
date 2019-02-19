const router = require("express").Router();
const User = require("../models/User.js");
var session = require("express-session");

var loggedIn = false;
router.get("/auth", function (req, res) {
  // send back "session" status
  res.json(loggedIn);
});

router.post("/users/login", function (req, res) {

  let { username, password } = req.body,
    payload = { username, password };
    //console.log(payload)
  // look for user that matches the posted email and password
  var token = "t" + Math.random();
  console.log(token);
  User.findOneAndUpdate(payload, {$set:{token: token}}, {new: true}, (err, user) => {
    //console.log(user);
    if (err) {
      throw err
    } else if(user === null || user === undefined) {
      console.log("user does not exist");
      console.log(res);
      res.send("error");
    } else {
      res.cookie("token", token, { expires: new Date(Date.now() + 999999999) });
      // console.log(req.session);
      // console.log(user);
      req.session.user = user;
      console.log('session user', req.session.user);
      return res.redirect("/users/login");
    }
    
})
  
});

router.get("/login", function (req, res) {
  console.log('get login route ', req.session.user);
  // check session first
  if (req.session.user) {
    console.log("session is true");
    res.redirect("/profile");
  }
  // then check cookie
  else if (req.headers.cookie.indexOf("token=") !== -1) {
  // use regex to grab cookie from headers string
    var cookie = req.headers.cookie.match(/(?<=token=)[^ ;]*/)[0];
    // compare cookie against db records
    User.findOne({token: cookie}).then((user) => {
      
      // console.log("user from cookie = ", user);
        req.session.user = user;
        
    }).catch(err => {
      if(err) throw err;
    });
    // no match, so clear cookie
    res.clearCookie("token");
    return res.end();
  }
  else {
    console.log("failed");
    return res.end();
  }
});

router.get("/api/profile", function (req, res) {
  // only users with set session can see this route
  if (req.session.user) {
    console.log("log working ", req.session.user);
    let {_id, username, time, token} = req.session.user,
        payload = {_id, username, time, token}
        res.json(payload);
  }
  else {
    res.end();
  }
});

router.get("/logout", function (req, res) {
  // clear cookie and session
  res.clearCookie("token");
  req.session.destroy();

  res.redirect("/users");
});




module.exports = router;

