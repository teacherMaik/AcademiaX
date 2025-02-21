SHOW DATABASES;

USE ax;

CREATE TABLE IF NOT EXISTS productos(
    id INT PRIMARY KEY,
    nombre VARCHAR(100),
    categoria VARCHAR(100),
    precio DECIMAL(10, 2),
    stock INT
);

/*
INSERT INTO productos(id, nombre, categoria, precio, stock) VALUES
(1, "Laptop", "Electrónica", 1200.50, 15),
(2, "Smartphone", "Electrónica", 699.99, 30),
(3, "Cámara", "Electrónica", 499.75, 10),
(4, "Bolso de cuero", "Moda", 149.95, 20),
(5, "Zapatillas Deportivas", "Moda", 89.99, 50),
(6, "El Señor de los Anillos", "Libros", 24.99, 100);
*/

SELECT * FROM productos;

SELECT COUNT(*) FROM productos;

SELECT * FROM productos LIMIT 2 OFFSET 2;

SELECT * FROM productos WHERE categoria IN ('Moda', 'Libros') AND nombre LIKE '%Deportivas%';

SELECT nombre, CASE WHEN stock > 0 THEN 'En stock' ELSE 'Agotado' END AS estado_stock FROM productos;

SELECT DISTINCT categoria FROM productos;

SELECT * FROM productos ORDER BY precio DESC;