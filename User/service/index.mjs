import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

let users = [];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
});

app.listen(3001, () => {
  console.log("UserService is running on port 3001");
});
