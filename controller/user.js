const USER = require("../model/user");
const { setUser } = require("../service/auth");

async function handleUserSignUp(req, res) {
  const { name, email, password } = req.body;
  await USER.create({ name, email, password });
  return res.redirect("/");
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await USER.findOne({ email, password });

  if (!user)
    return res.render("login", { error: "Invalid UserName or Pasword" });

  const token = setUser(user);
  res.cookie("token", token);

  if (user.role === "ADMIN") return res.redirect("/admin");
  return res.redirect("/");
}

module.exports = { handleUserSignUp, handleUserLogin };
