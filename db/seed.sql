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
  description VARCHAR(1000),
  image VARCHAR(2000),
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
(name, description, image, lim)
VALUES
('book', 'it is a book', 'book.png', 10),
('game', 'it is a game', 'game.png', 20),
('Star Wars', 'it is a star war', 'starwars.png', 12);