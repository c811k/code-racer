const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session");
const PORT = process.env.PORT || 3001;
const app = express();

require("dotenv").config();

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: "yolo", 
  resave: false,
  saveUninitialized: true,
  cookie: {secure: "auto"}
}));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
// app.use(express.static("client/build"));
  app.use(express.static(path.join(__dirname, "client", "build")));
}

// Define API routes here
const routes = require("./routes/api.js");
app.use(routes);

const userRoutes = require("./routes/user-routes");
app.use( userRoutes);
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/coderacer", { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
