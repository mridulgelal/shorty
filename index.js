const express = require("express");
require("dotenv").config();
const path = require("path");
const cookieParser = require("cookie-parser");
const urlRoute = require("./routes/url");
const userRoute = require("./routes/user");
const staticRoute = require("./routes/staticRouter");
const connectToMongoDB = require("./connection");
const { checkForAuthentication, restrictTo } = require("./middleware/auth");
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthentication);

app.use("/url", restrictTo(["NORMAL"]), urlRoute);
app.use("/user", userRoute);
app.use("/", staticRoute);

connectToMongoDB("mongodb://localhost:27017/short-url");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.listen(PORT, () => console.log(`Server running @ PORT: ${PORT}`));
