CREATE TABLE IF NOT EXISTS empresas(
	cnpj VARCHAR(14) NOT NULL,
	nome VARCHAR(50) NOT NULL,    
	representante_legal VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL, 
	telefone VARCHAR(11) NOT NULL, 
	endereco VARCHAR(50) NOT NULL,
	PRIMARY KEY(cnpj)
);