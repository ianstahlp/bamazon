DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
	item_id INT AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(45) NOT NULL,
	department_name VARCHAR(45) NOT NULL, 
	price DECIMAL(10, 2) NOT NULL, 
	stock_quantity INT(10) NOT NULL, 
	primary key(item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Climbing Shoes", "Apparel", 99.99, 20),
	   ("Motorcycle", "Vehicle", 1400.95, 15),
	   ("MTG Booster Packs", "Trading Cards", 5.99, 100),
	   ("PS4", "Gaming Console", 399.99, 200),
	   ("Skateboard", "Transportation", 50.95, 40),
	   ("Hamburger Buns", "Food", 2.99, 70);