const User = require("../models/User");
const mongoose = require("mongoose");
const passport = require("passport");

exports.register = async (req, res) => {
  res.render("register");
};
exports.login = async (req, res) => {
  res.render("login");
};
exports.loginOnPost = passport.authenticate("local", {
  successRedirect: "/submit-recipe",

  failureRedirect: "/register",
});

exports.registerOnPost = async (req, res) => {
  User.register(
    { username: req.body.username },
    req.body.password,
    function (Error, user) {
      if (Error) {
        console.log(Error);
        res.redirect("/register");
      } else {
        passport.authenticate("local")(req, res, function () {
          res.redirect("submit-recipe");
        });
      }
    }
  );
};
