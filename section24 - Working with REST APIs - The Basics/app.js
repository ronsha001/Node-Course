const express = require("express");
const bodyParser = require("body-parser");

const feedRoutes = require("./routes/feeds");

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

// CORS stand for Cross-Origin Resource Sharing
// Prevent CORS Error by setting headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use("/feed", feedRoutes);

app.listen(8080);
