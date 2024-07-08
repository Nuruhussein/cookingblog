const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const fileUpload = require("express-fileupload");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const flash = require("connect-flash");
const User = require("./server/models/User");

const app = express();
const port = process.env.PORT || 8800;

require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(expressLayouts);

app.use(cookieParser("CookingBlogSecure"));
// Sessions
app.use(
  session({
    secret: process.env.SECRET || "secret",
    resave: false,
    saveUninitialized: false,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());
app.use(fileUpload());
passport.use(User.createStrategy());
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

const recipeRoutes = require("./server/routes/recipeRoutes.js");
const userRoutes = require("./server/routes/userRoutes.js");
app.use("/", recipeRoutes);
app.use("/", userRoutes);
app.listen(port, () => console.log(`Listening to port ${port}`));
