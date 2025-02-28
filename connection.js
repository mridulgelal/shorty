const mongoose = require("mongoose");
const User = require("./model/user");

async function connectToMongoDB(url) {
  return mongoose
    .connect(url)
    .then(async () => {
      console.log("MongoDB Connected");

      // Check if the admin exists

      const existingAdmin = await User.findOne({
        email: process.env.ADMIN_EMAIL,
      });

      if (!existingAdmin) {
        await User.create({
          name: "Admin",
          email: process.env.ADMIN_EMAIL,
          password: process.env.ADMIN_EMAIL,
          role: "ADMIN",
        });
        console.log("Hard-coded admin user created.");
      }
    })
    .catch((err) => console.log("Mongo Error", err));
}

module.exports = connectToMongoDB;
