SHOW DATABASES;

USE ax;

SHOW TABLES;

SELECT * FROM students;

/*
ALTER TABLE students ADD COLUMN email VARCHAR(50);
ALTER TABLE students ADD COLUMN fecha_registro DATETIME;
ALTER TABLE students ADD COLUMN coste_matricula DECIMAL(5, 2);
*/

SELECT * FROM students;

-- UPDATE students SET email = 'juan@perez.com', fecha_registro = '2022-01-15 08:30:00', coste_matricula = 120.50 WHERE nombre = 'Juan Pérez';
-- UPDATE students SET email = 'maria@gomez.com', fecha_registro = '2022-02-20 10:45:00', coste_matricula = 300.75 WHERE nombre = 'María Gómez';
-- UPDATE students SET email = 'ana@sanchez.com', fecha_registro = '2022-03-05 15:20:00', coste_matricula = 50.20 WHERE nombre = 'Ana Sánchez';
-- INSERT INTO students(email, fecha_registro, coste_matricula) VALUES ('juan@perez.com', '2022-01-15 08:30:00', 120.50);
-- INSERT INTO students(email, fecha_registro, coste_matricula) VALUES ('maria@gomez.com', '2022-02-20 10:45:00', 300.75);
-- INSERT INTO students(email, fecha_registro, coste_matricula) VALUES ('ana@sanchez.com', '2022-03-05 15:20:00', 50.20);


-- SHOW COLUMNS FROM students;
-- SELECT * FROM students;

SELECT CONCAT_WS(' ', nombre, email) AS 'nombre_correo' FROM students;
SELECT email, LENGTH(email) FROM students;

SELECT ROUND(coste_matricula) FROM students;

SELECT fecha_registro, 
       COLUMN_TYPE 
FROM INFORMATION_SCHEMA.COLUMNS 
WHERE TABLE_NAME = 'students';