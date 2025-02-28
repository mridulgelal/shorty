const express = require("express");
const {
  handleGenerateURL,
  handleGetUrlById,
  handleGetUrlAnalytics,
  handleGetHomePage,
} = require("../controller/url");

const router = express.Router();

router.route("/").post(handleGenerateURL);

router.route("/:shortId").get(handleGetUrlById);

router.route("/analytics/:shortId").get(handleGetUrlAnalytics);

router.route("/page/home").get(handleGetHomePage);

module.exports = router;
