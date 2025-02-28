const URL = require("../model/url");

async function getStaticRouterHomePage(req, res) {
  const allUrls = await URL.find({ createdBy: req.user._id });
  return res.render("home", { urls: allUrls, port: process.env.PORT });
}

module.exports = { getStaticRouterHomePage };
