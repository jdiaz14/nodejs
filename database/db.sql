-- crear bsd
CREATE DATABASE crudnodejs;

-- usar bsd
use crudnodejs;

-- nueva tabla
CREATE TABLE usuario (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  correo VARCHAR(100) NOT NULL,
  telefono VARCHAR(15)
);

-- ver tablas
show tables;

-- descripcion 
describe customer;