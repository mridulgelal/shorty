const express = require("express");
const URL = require("../model/url");
const { getStaticRouterHomePage } = require("../controller/staticRoutes");
const { restrictTo } = require("../middleware/auth");

const router = express.Router();

router.get("/", restrictTo(["NORMAL", "ADMIN"]), getStaticRouterHomePage);

router.get("/admin", restrictTo(["ADMIN"]), async (req, res) => {
  const allUrls = await URL.find({});
  return res.render("home", { urls: allUrls, port: process.env.PORT });
});

module.exports = router;
