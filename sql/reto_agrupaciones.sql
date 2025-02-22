USE ax

/*
CREATE TABLE IF NOT EXISTS ventas (
  id SERIAL PRIMARY KEY,
  producto VARCHAR(50),
  cantidad INTEGER,
  precio DECIMAL(10, 2),
  fecha_venta DATE
);
*/

-- Inserción de algunos datos iniciales
-- INSERT INTO ventas (producto, cantidad, precio, fecha_venta) VALUES
-- ('Laptop', 5, 1200.50, '2022-01-15'),
-- ('Teléfono', 8, 450.75, '2022-01-15'),
-- ('Tablet', 3, 300.20, '2022-02-20'),
-- ('Laptop', 2, 1100.25, '2022-02-20'),
-- ('Teléfono', 10, 400.00, '2022-03-05');

SELECT producto, SUM(cantidad) AS cantidad_total, ROUND(AVG(precio), 2) AS promedio_precio, MAX(fecha_venta) AS ultima_venta
FROM ventas
GROUP BY producto;

SELECT producto, SUM(cantidad) AS cantidad_total, ROUND(AVG(precio), 2) AS promedio_precio, MAX(fecha_venta) AS ultima_venta
FROM ventas
GROUP BY producto
HAVING SUM(cantidad) > 5;