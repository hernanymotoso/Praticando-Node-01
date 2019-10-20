## Aplicação utilizando o express, a mesma armazena projetos e suas tarefas

## Middlewares

- Criar um middleware que verifica se o projeto existe.

- Criar um middleware global chamado em toda requisição, o mesmo deve imprimir
  um console.log de quantas requisições ja foram feitas.

## Rotas

- POST /projects irá receber id e title e cadastrar um novo projeto dentro de
  um array.

- GET /projects Lista todos os projetos.

- GET /projects/:id Lista um projeto a partir de um id.

- PUT /projects/:id Atualiza o titulo do projeto de acordo com id passado.

- DELETE /projects/:id Deleta o projeto de acordo com o id passado.

- POST /projects/:id/tasks Recebe um titulo e armazena uma nova tarefa no array
  de um projeto escolhido a partir de um id.
