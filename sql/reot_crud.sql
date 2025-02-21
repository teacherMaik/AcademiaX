SHOW DATABASES;

USE ax;

CREATE TABLE IF NOT EXISTS students(
    id INT PRIMARY KEY,
    nombre VARCHAR(100),
    edad INT,
    studies VARCHAR(100)
);

/*
INSERT INTO students (id, nombre, edad, studies) VALUES 
(1, "Juan Pérez", 19, "Arquitectura"),
(2, "María Gómez", 22, "Arquitectura"),
(3, "Carlos Rodríguez", 21, "Medicina");
*/

SHOW TABLES;

SELECT * FROM students WHERE edad > 20

UPDATE students SET edad = 23 WHERE nombre = "Juan Pérez";

SELECT * FROM students;

/*INSERT INTO students (id, nombre, edad, studies) VALUES (4, "Ana Sánchez", 20, "Informática");*/

SELECT * FROM students;

/*DELETE FROM students WHERE nombre = "Carlos Rodríguez";*/

SELECT * FROM students;