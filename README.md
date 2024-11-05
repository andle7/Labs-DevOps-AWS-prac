**Labs - 웹 서비스 개발/DevOps에 AWS 서비스 활용**

---
다음의 기존 Backend Code를 Lambda 및 API Gateway로 전환

<details>
    <summary>기존 Codes</summary>
      &nbsp;
      <details>
         &nbsp;&nbsp;<summary>TaskService > index.mjs</summary>
            npm install express body-parser

  ```JavaScript

              import express from 'express';
              import bodyParser from 'body-parser';

              const app = express();
              app.use(bodyParser.json());

              let tasks = [];

              app.get('/tasks', (req, res) => {
                  res.json(tasks);
              });

              app.post('/tasks', (req, res) => {
                  const task = req.body;
                  tasks.push(task);
                  res.status(201).json(task);
              });

              app.listen(3000, () => {
                  console.log('TaskService is running on port 3000');
              });

  ```
  </details>
      <details>
         &nbsp;&nbsp;<summary>TaskService > index.mjs</summary>
            npm install express body-parser

  ```JavaScript

              import express from 'express';
              import bodyParser from 'body-parser';

              const app = express();
              app.use(bodyParser.json());

              let tasks = [];

              app.get('/tasks', (req, res) => {
                  res.json(tasks);
              });

              app.post('/tasks', (req, res) => {
                  const task = req.body;
                  tasks.push(task);
                  res.status(201).json(task);
              });

              app.listen(3000, () => {
                  console.log('TaskService is running on port 3000');
              });

  ```
  </details>

</details>

