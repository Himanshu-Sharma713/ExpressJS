// Mini Project

import express from "express";
import path from "node:path";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(import.meta.dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/profile/:username", (req, res) => {
  res.send(`<h1> Welcome ${req.params.username} </h1>`);
});

app.get("/author/:username/:age", (req, res) => {
  res.send(
    `<h1> Welcome ${req.params.username}, your age is ${req.params.age}   </h1>`
  );
});

app.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}/`);
});
