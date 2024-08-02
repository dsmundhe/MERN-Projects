const express = require("express");
const dbConnection = require("./db/dbConnection");
const User = require("./db/user");
const port = 8000;
const app = express();
const cors = require("cors");
dbConnection();

app.use(express.json());

//Register....
//enable

app.use(cors());

app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const newData = new User({
      username,
      password,
    });
    await newData.save();
    res.status(201).send("Acount created......");
  } catch (error) {
    console.error(error);
    res.send("could not create account.....");
  }
});

//Login

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (!user) {
      res.send("invalid username and password.....");
    }
    if (user) {
      res.json({ success: true, message: "Login successful" });
    }
  } catch (error) {
    console.error(error);
    res.status(501).send("invalid");
  }
});

app.listen(port, () => {
  console.log("server in running.......");
});
