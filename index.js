const express = require("express");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  console.log("Estou detro do /");
});

const projetos = [];
server.post("/projects", (req, res) => {
  let dados = [];
  const { id } = req.body;
  const { title } = req.body;
  const tasks = ["Ex1", "Ex2", "Ex3"];
});

server.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
