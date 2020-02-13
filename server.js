const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
const Country = require("./models/Country.model");

app.listen(port, () => {
  console.log("listening on port " + port);
});

const myMongoUri = "mongodb://localhost:27017/country-info";

mongoose.connect(myMongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", () => {
  console.log("there was a problem connecting to database");
});

db.once("open", () => {
  console.log("connected to database");
});

app.use(express.json());

app.get("/countries", (req, res) => {
  Country.find().then(countries => {
    res.status(200).send(countries);
  });
});

app.post("/addcountry", (req, res) => {
  console.log("received request");
  const { name, capital } = req.body;
  const country = new Country({ name, capital });
  country
    .save()
    .then(() => {
      res.status(200).send("New country was saved successfully");
    })
    .catch(err => {
      console.log("Error: " + err);
    });
});
