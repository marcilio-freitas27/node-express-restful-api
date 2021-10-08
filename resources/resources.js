const db = require('../db');
const fs = require('fs');

//função para a conexão

// funções para banco de dados
const buscaDados = (req, res) => {
    db.config.query('SELECT * FROM empresa', (err,result) => {
      if (err) {
        throw err;
      }
      res.status(200).send(result.rows);
    });
  }
  
const insereEmpresa = (req, res) => {
    const { 
        cnpj,
        nome,
        representante_legal,
        email,
        telefone,
        endereco 
    } = req.body;
  
    db.config.query(
        "INSERT INTO empresa (cnpj,nome,representante_legal,email,telefone,endereco) \
        VALUES ($1,$2,$3,$4,$5,$6)",
        [cnpj,nome,representante_legal,email,telefone,endereco],(err, result) => {
        if (err) {
            throw err;
        }
  
        res.status(200).send({
            cnpj, 
            nome,
            representante_legal,
            email,
            telefone,
            endereco
        });
    });
} 
  
const atualizaDados = (req, res) => {
    const cnpj = req.params.id;
    const {
        nome
    } = req.body;
    db.config.query("UPDATE empresa set nome = $2 WHERE cnpj = $1",[cnpj,nome],(err, result) => {
        if (err){
            throw err;
        }
        res.status(200).send({
            message: 'Dados atualizados com sucesso.'
        });
    });
}

const deletaDados = (req, res) => {
    const cnpj = req.params.id;
    db.config.query("DELETE FROM empresa WHERE cnpj = $1",[cnpj], (err, result) => {
        if (err) {
            throw err;
        }
        res.status(200).send(result.rows);
    });
}
  
const sql = fs.readFileSync("sql/estados.sql").toString();
const criarTabela = (req, res) => {
    db.config.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
    res.status(200).send(result.rows);
    });
}

const file = fs.readFileSync('index.html').toString();
const lerArquivos = (req, res) => {
    res.status(200).send(file);
}

module.exports = { 
    buscaDados,
    insereEmpresa, 
    atualizaDados, 
    deletaDados, 
    criarTabela,
    lerArquivos
};