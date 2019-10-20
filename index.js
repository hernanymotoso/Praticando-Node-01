const express = require("express");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  console.log("Estou detro do /");
});

const projects = [];
server.post("/projects", (req, res) => {
  const dados = {};

  dados.id = req.body.id;
  dados.title = req.body.title;
  dados.tasks = ["Ex1", "Ex2", "Ex3"];

  projects.push(dados);

  res.status(201).json(projects);
  console.log("Projeto criado!!!");
});

server.get("/projects", (req, res) => {
  res.status(200).json(projects);
});

server.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
