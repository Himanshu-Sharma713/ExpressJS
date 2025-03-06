// Express JS Code

import express from "express";

const app = express();
const PORT = 3220;

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Express JS Page...</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>This is About Page ... </h1>");
});

app.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}/`);
});
