const express = require("express");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  console.log("Estou detro do /");
});

const projetos = [];
server.post("/projects", (req, res) => {
  const dados = {};

  dados.id = req.body.id;
  dados.title = req.body.title;
  dados.tasks = ["Ex1", "Ex2", "Ex3"];

  projetos.push(dados);

  res.status(201).json(projetos);
  console.log("Projeto criado!!!");
});

server.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
