/**
 * W3Schools
 * 
 * 1_SQL_Syntax
 * 2_SQL_Select
 * 3_SQL_Select_Distinct
 * 4_SQL_Where
 * 5_SQL_Order_By
 * 6_SQL_And
 * 7_SQL_Or
 * 16_SQL_Count
 * 
 * */


--- Create customer and product table

create table customer(
	id uuid primary key,
	name varchar(100) not null,
	contact_name varchar(100) not null,
	address varchar(100) not null,
	city varchar(100) not null,
	postal_code varchar(20) not null,
	country varchar(20)
);
drop table if exists customer;

create table product(
	id uuid primary key,
	product_name varchar(100) not null,
	supplier_id integer not null,
	category_id integer not null,
	unit varchar(100) not null,
	price double precision not null
);

drop table if exists product;


--- Test data for customer table

insert into customer(
	id, name, contact_name, address, city, postal_code, country
) values(
	gen_random_uuid(), 'Acme Corp', 'John Doe', '123 Main St', 'New York', '1001', 'USA'
);

INSERT INTO customer (
    id, name, contact_name, address, city, postal_code, country
) VALUES (
    gen_random_uuid(), 'Alfreds Futterkiste', 'Maria Anders', 'Obere Str. 57', 'Berlin', '12209', 'Germany'
);

INSERT INTO customer (
    id, name, contact_name, address, city, postal_code, country
) VALUES (
    gen_random_uuid(), 'Ana Trujillo Emparedados y helados', 'Ana Trujillo', 'Avda. de la Constitución 2222', 'México D.F.', '05021', 'Mexico'
);

INSERT INTO customer (
    id, name, contact_name, address, city, postal_code, country
) VALUES (
    gen_random_uuid(), 'Antonio Moreno Taquería', 'Antonio Moreno', 'Mataderos 2312', 'México D.F.', '05023', 'Mexico'
);

INSERT INTO customer (
    id, name, contact_name, address, city, postal_code, country
) VALUES (
    gen_random_uuid(), 'Around the Horn', 'Thomas Hardy', '120 Hanover Sq.', 'London', 'WA1 1DP', 'UK'
);

INSERT INTO customer (
    id, name, contact_name, address, city, postal_code, country
) VALUES (
    gen_random_uuid(), 'Berglunds snabbköp', 'Christina Berglund', 'Berguvsvägen 8', 'Luleå', 'S-958 22', 'Sweden'
);


--- Test data for product table

insert into product (id, product_name, supplier_id, category_id, unit, price) VALUES
(gen_random_uuid(), 'Chais', 1, 1, '10 boxes x 20 bags', 18.00),
(gen_random_uuid(), 'Chang', 1, 1, '24 - 12 oz bottles', 19.00),
(gen_random_uuid(), 'Aniseed Syrup', 1, 2, '12 - 550 ml bottles', 10.00),
(gen_random_uuid(), 'Chef Anton''s Cajun Seasoning', 2, 2, '48 - 6 oz jars', 22.00),
(gen_random_uuid(), 'Chef Anton''s Gumbo Mix', 2, 2, '36 boxes', 21.35);


--- Queries

select * from customer;
select name, city from customer;

/**
 * 
 * Inside a table, a column often contains many duplicate values;
 * and sometimes you only want to list the different (distinct)
 * values.
 * 
 * */
select distinct country from customer;
select distinct country, city from customer;

/**
 * 
 * By using the DISTINCT keyword in a function called COUNT,
 * we can return the number of different countries.
 * 
 **/
select count(distinct country) from customer;

/**
 * 
 * The WHERE clause is used to filter records.
 * It is used to extract only those records that fulfill a specified
 * condition.
 * 
 **/
select * from customer where country='Mexico';
select * from customer where length(address) >= 20;
select * from customer where length(address) < 20;

select * from product;

/**
 * 
 * The ORDER BY keyword is used to sort the result-set in ascending
 * or descending order
 * 
 * */
select * from product order by price asc;
select * from product order by price desc;

/**
 * 
 * This means that it orders by Country, but if some rows have
 * the same Country, it orders them bu Name.
 * 
 * */
select * from customer order by country, name;
select * from customer order by country asc, name desc;

/**
 * 
 * The WHERE clause can contain one or many AND operators.
 * 
 * The AND operator is used to filter records based on more than
 * one condition, like if you want to return all customers from
 * Germany that starts with letter 'A'.
 * 
 * */
select * from customer where country='Germany' and name like 'B%';
select * from customer where country='Germany' and name like 'A%';
select * from customer where country='Mexico' and contact_name like 'A%' and name like 'A%' and postal_code like '%3';
select * from customer where postal_code like '%1' or postal_code like '%P';

/**
 * 
 * The WHERE cluase can contain one or more OR operators
 * 
 * The OR operator is used to filter records based on more than one
 * condition, like if you want to return all customers from
 * Germany but also those from Span.
 * 
 **/
select * from customer;
select * from customer where country='Germany' or country='USA';
select * from customer where country='Mexico' or postal_code like '%9';

/**
 *
 * The COUNT() function returns the number of rows that matches
 * a specified criterion.
 * 
 * For example, find the total number of rows in the customer table
 * 
 **/
select count(*) from customer;

/**
 * 
 * You can specify a column name instead of the asterix symbol.
 * 
 * If you specify a column name instead of (*), NULL values will not
 * be counted. 
 * 
 **/
select * from customer;
select count(*) from customer;
select count(contact_name) from customer;