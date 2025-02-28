const shortid = require("shortid");

const URL = require("../model/url");

async function handleGenerateURL(req, res) {
  const body = req.body;
  if (!body.url) return res.json({ error: "url is required" });
  const shortID = shortid();

  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
    createdBy: req.user._id,
  });

  return res.redirect("/");
}

async function handleGetUrlById(req, res) {
  const shortId = req.params.shortId;

  const hasId = await URL.findOne({ shortId });
  const entry = await URL.findOneAndUpdate(
    { shortId },
    { $push: { visitHistory: { timestamp: Date.now() } } }
  );
  if (!hasId) return res.status(400).json({ msg: "not found" });
  return res.redirect(entry.redirectURL);
}

async function handleGetUrlAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({ count: result.visitHistory.length });
}

async function handleGetHomePage(req, res) {
  const allUrls = await URL.find({});
  return res.render("home", { urls: allUrls });
}

module.exports = {
  handleGenerateURL,
  handleGetUrlById,
  handleGetUrlAnalytics,
  handleGetHomePage,
};
