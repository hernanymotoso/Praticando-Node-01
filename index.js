const express = require("express");

const server = express();

server.use(express.json());

/**
 * Utilizamos a variavel 'numberOfRequests' como 'let'
 * porque vai sifrer mutação. A variavel 'projects' pode ser 'const' porque um
 * 'array' pode receber adições ou exclusoes mesmo sendo uma constante
 */

let numberOfRequests = 0;
const projects = [];

/**
 * Middleware que checa se o projeto existe
 */

function checkProjectExists(req, res, next) {
  const { id } = req.params;

  // Aqui retorna para a const project o projeto q atende a condição passada no find
  const project = projects.find(p => p.id === id);

  if (!project) {
    return res.status(400).json({ error: "Project not found" });
  }

  return next();
}
/**
 * Middleware q da log no numero de requisições
 */
function logRequests(req, res, next) {
  numberOfRequests++;

  console.log(`Numero de requisições: ${numberOfRequests}`);

  return next();
}

server.use(logRequests);

/**
 * Projects
 */

server.get("/projects", (req, res) => {
  res.status(200).json(projects);
});
server.get("/projects/:id", checkProjectExists, (req, res) => {
  const { id } = req.params;

  const project = projects.find(p => p.id === id);

  return res.json(project);
});

server.post("/projects", (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
    tasks: []
  };

  projects.push(project);
  console.log("Projeto criado!!!");
  return res.status(201).json(project);
});

server.put("/projects/:id", checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  // Aqui retorna para a "const project" o projeto q atende a condição passada no "find()"
  const project = projects.find(p => p.id === id);

  project.title = title;

  return res.json(project);
});

server.delete("/projects/:id", checkProjectExists, (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex(p => p.id === id);

  projects.splice(projectIndex, 1);

  console.log("Projeto deletado");
  return res.send();
});

/**
 * Tasks
 */

server.post("/projects/:id/tasks", checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id === id);

  project.tasks.push(title);

  return res.json(project);
});

server.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
