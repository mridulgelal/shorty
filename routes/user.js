const express = require("express");
const { handleUserSignUp, handleUserLogin } = require("../controller/user");

const router = express.Router();

router.route("/").post(handleUserSignUp);
router
  .route("/login")
  .get((req, res) => res.render("login"))
  .post(handleUserLogin);

router.route("/signup").get((req, res) => res.render("signup"));

router.route("/logout").get((req, res) => {
  res.clearCookie("token");
  res.redirect("/");
});

module.exports = router;
