DROP TABLE IF EXISTS item_cart_junction;
DROP TABLE IF EXISTS carts;
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  email VARCHAR(100),
  password VARCHAR(2000),
  admin boolean
);

CREATE TABLE items (
  item_id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  price int,
  lim int,
  user_id int REFERENCES users(user_id)
);

CREATE TABLE carts (
  cart_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(user_id),
  active BOOLEAN
);

CREATE TABLE item_cart_junction (
  product_cart_id SERIAL PRIMARY KEY,
  cart_id INT REFERENCES carts(cart_id),
  item_id INT REFERENCES items(item_id),
  quantity INT
);

INSERT INTO items
(name, price, lim)
VALUES
('Honeymoon Plane Tickets', 100, 50),
('Honeymoon Hotel Room', 50,  50),
('Drinks for Two', 20, 50),
('Romantic Dinner for Two', 40, 40),
('Snorkeling Lessons for Two', 75, 10),
('Car Insurance for One Month', 200, 10),
('New Washer and Dryer', 150, 50),
('Whiskey Tasting for Two', 50, 50),
('Boarding for Echo', 35, 50),
('KitchenWare Mixer', 100, 50),
('New Bedroom Set', 50, 50),
('Pots and Pans Set', 75, 40),
('Bath Towels', 25, 50),
('Vacuum', 125, 50),
('Suitcases', 75, 10),
('Outdoor Grill', 45, 40),
('Dutch Oven', 40, 40),
('Pet Gear for Echo', 20, 50);