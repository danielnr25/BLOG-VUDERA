const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

async function database() {
  try {
    await mongoose.connect(
      "mongodb+srv://ecommerce:V7w9Aaw8t2yMYMmJ@cluster0.xjupns3.mongodb.net/vudera"
    );
    console.log("Connect successfully!!!");
  } catch (error) {
    console.log("Connect failure!!!");
    console.log(error);
  }
}

const blogs = require("./Routes/Blogs");
blogs(app);

app.listen(port, async () => {
  console.log(`Server is running on port: http://localhost:${port}`);
  await database();
});
