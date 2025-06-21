--- Customers table
create table customers(
	id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(20) NOT NULL,
    registration_date DATE NOT NULL,
    loyalty_level VARCHAR(20) NOT NULL
);

--- Orders table
create table orders(
	id SERIAL PRIMARY KEY,
    customer_id INTEGER NOT NULL,
    order_date TIMESTAMP NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    status VARCHAR(20) NOT NULL,
    payment_method VARCHAR(30) NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);

--- Delete tables (for support)
drop table if exists customers;
drop table if exists orders;

--- Customers table data
insert into customers (first_name, last_name, email, phone, registration_date, loyalty_level) values
('Juan', 'Pérez', 'juan.perez@email.com', '555-1001', '2022-01-15', 'Gold'),
('María', 'Gómez', 'maria.gomez@email.com', '555-1002', '2022-02-20', 'Silver'),
('Carlos', 'López', 'carlos.lopez@email.com', '555-1003', '2022-03-10', 'Bronze'),
('Ana', 'Martínez', 'ana.martinez@email.com', '555-1004', '2022-01-25', 'Gold'),
('Luis', 'Rodríguez', 'luis.rodriguez@email.com', '555-1005', '2022-04-05', 'Silver'),
('Sofía', 'Hernández', 'sofia.hernandez@email.com', '555-1006', '2022-05-12', 'Bronze'),
('Pedro', 'Díaz', 'pedro.diaz@email.com', '555-1007', '2022-06-18', 'Gold'),
('Laura', 'Sánchez', 'laura.sanchez@email.com', '555-1008', '2022-07-22', 'Silver'),
('Jorge', 'Ramírez', 'jorge.ramirez@email.com', '555-1009', '2022-08-30', 'Bronze'),
('Mónica', 'Flores', 'monica.flores@email.com', '555-1010', '2022-09-05', 'Gold'),
('Ricardo', 'Cruz', 'ricardo.cruz@email.com', '555-1011', '2022-10-15', 'Silver'),
('Patricia', 'Morales', 'patricia.morales@email.com', '555-1012', '2022-11-20', 'Bronze'),
('Fernando', 'Ortiz', 'fernando.ortiz@email.com', '555-1013', '2022-12-10', 'Gold'),
('Gabriela', 'Gutiérrez', 'gabriela.gutierrez@email.com', '555-1014', '2023-01-25', 'Silver'),
('Raúl', 'Vargas', 'raul.vargas@email.com', '555-1015', '2023-02-05', 'Bronze'),
('Diana', 'Castillo', 'diana.castillo@email.com', '555-1016', '2023-03-12', 'Gold'),
('Roberto', 'Jiménez', 'roberto.jimenez@email.com', '555-1017', '2023-04-18', 'Silver'),
('Claudia', 'Ruiz', 'claudia.ruiz@email.com', '555-1018', '2023-05-22', 'Bronze'),
('Oscar', 'Mendoza', 'oscar.mendoza@email.com', '555-1019', '2023-06-30', 'Gold'),
('Lucía', 'Aguilar', 'lucia.aguilar@email.com', '555-1020', '2023-07-05', 'Silver');

--- Orders table data
insert into orders (customer_id, order_date, total_amount, status, payment_method) values
(1, '2023-01-10 09:15:00', 150.50, 'Delivered', 'Credit Card'),
(1, '2023-02-15 14:30:00', 225.75, 'Shipped', 'PayPal'),
(2, '2023-01-20 11:45:00', 89.99, 'Delivered', 'Debit Card'),
(3, '2023-03-05 16:20:00', 45.25, 'Processing', 'Credit Card'),
(4, '2023-02-28 10:10:00', 120.00, 'Shipped', 'PayPal'),
(4, '2023-03-15 13:25:00', 65.50, 'Delivered', 'Debit Card'),
(4, '2023-04-02 08:30:00', 210.20, 'Processing', 'Credit Card'),
(5, '2023-01-25 17:45:00', 34.99, 'Delivered', 'PayPal'),
(6, '2023-03-10 12:00:00', 78.45, 'Shipped', 'Debit Card'),
(7, '2023-02-05 15:35:00', 145.60, 'Delivered', 'Credit Card'),
(8, '2023-04-18 09:50:00', 99.99, 'Processing', 'PayPal'),
(9, '2023-03-22 14:15:00', 55.75, 'Shipped', 'Debit Card'),
(10, '2023-01-15 10:25:00', 180.30, 'Delivered', 'Credit Card'),
(10, '2023-02-20 16:40:00', 95.45, 'Shipped', 'PayPal'),
(11, '2023-04-05 11:55:00', 125.00, 'Processing', 'Debit Card'),
(12, '2023-03-12 08:10:00', 67.89, 'Delivered', 'Credit Card'),
(13, '2023-02-18 13:20:00', 230.75, 'Shipped', 'PayPal'),
(14, '2023-05-22 10:30:00', 88.50, 'Processing', 'Debit Card'),
(15, '2023-04-30 15:45:00', 112.25, 'Delivered', 'Credit Card'),
(16, '2023-03-15 09:00:00', 76.99, 'Shipped', 'PayPal'),
(17, '2023-06-18 14:15:00', 155.60, 'Processing', 'Debit Card'),
(18, '2023-05-05 17:30:00', 199.99, 'Delivered', 'Credit Card'),
(19, '2023-04-22 10:45:00', 45.75, 'Shipped', 'PayPal'),
(20, '2023-07-10 12:00:00', 210.30, 'Processing', 'Debit Card'),
(1, '2023-06-05 08:15:00', 175.45, 'Delivered', 'Credit Card'),
(3, '2023-05-15 13:30:00', 65.00, 'Shipped', 'PayPal'),
(5, '2023-04-20 16:45:00', 89.99, 'Processing', 'Debit Card'),
(7, '2023-07-01 09:00:00', 120.50, 'Delivered', 'Credit Card'),
(9, '2023-06-12 14:15:00', 34.25, 'Shipped', 'PayPal'),
(11, '2023-05-25 17:30:00', 78.99, 'Processing', 'Debit Card');

select * from orders;

select 
	orders.id as orders_id,
	customers.id as customers_id,
	customers.first_name, 
	orders.order_date 
from 
	orders 
inner join 
	customers on orders.customer_id=customers.id;