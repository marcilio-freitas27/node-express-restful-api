
//importado os módulos
const express = require('express');
const resource = require('./resources/resources');
const db = require('./db');

//instancia do express
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
  })
);

app.get('/', (req, res) => {
  res.send(
    "Hello express!<a href='./meusite'>Meu site</a>"
  );
});

app.get('/meusite', resource.lerArquivos);
app.get('/criar',  resource.criarTabela);
app.get("/buscar", resource.buscaDados);
app.post("/inserir", resource.insereEmpresa);
app.patch("/atualizar/:id", resource.atualizaDados);
app.delete("/deletar/:id", resource.deletaDados);
app.get('/con', db.conn);

app.listen(3000, () => {
  console.log('server started in http://localhost:3000');
});


// route < controller < resource(function);