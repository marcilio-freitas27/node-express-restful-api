const pg = require('pg');

const conn = (req, res) => {
  config.connect((err) => {
    if (err) {
      throw err;
    }
    res.send("conectado");      
  });
}

// instancia do objeto pool de conexão
const config = new pg.Pool({ 
  host     : 'localhost',
  user     : 'postgres',
  password : 'pgadmin',
  database : 'sistemas',
  port: 5432
});
    
module.exports = {
  conn,
  config
};