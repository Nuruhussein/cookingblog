// for connection
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/Recipes")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Models
require("./Category");
require("./Recipe");
require("./User");
