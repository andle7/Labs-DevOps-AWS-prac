import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

let tasks = [];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.status(201).json(task);
});

app.listen(3000, () => {
  console.log("TaskService is running on port 3000");
});
