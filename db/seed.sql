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
  price money,
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
(name, price, image, lim)
VALUES
('Honeymoon Plane Tickets', 100, 'https://i.pinimg.com/236x/ca/d4/96/cad4964c6db913778594e2ac7229e93d.jpg', 50),
('Honeymoon Hotel Room', 50, 'https://i.pinimg.com/originals/4d/bd/2d/4dbd2d80b53f95956572ca336f274b05.png', 50),
('Drinks for Two', 20, 'https://i.pinimg.com/474x/da/13/52/da135268f8c67eb4561c663b69b7fa99.jpg', 50),
('Romantic Dinner for Two', 40, 'https://64.media.tumblr.com/3d1a99feabc742b424b85f7d8c4c747c/2cdc6d27d99742d2-9b/s640x960/cd0666915f553536a4c00947fbcedd6fd71931af.png', 40),
('Snorkeling Lessons for Two', 75, 'https://64.media.tumblr.com/e524cebd13697d6e5e698ec832adc4f1/tumblr_n94kv1g6GF1sszc8jo1_640.jpg', 10),
('Car Insurance for One Month', 200, 'https://64.media.tumblr.com/057da3884a5bb6a65da68a47bcc65f46/tumblr_pi1rvfyi7O1qabu3po1_1280.jpg', 10),
('New Washer and Dryer', 150, 'https://photo2.dwellinggawker.com/wp-content/uploads/2018/10/82239.jpg', 50),
('Whiskey Tasting for Two', 50, 'https://64.media.tumblr.com/aee369cf0ae371cb1a2f52ee0c4f1559/tumblr_o0hy4ilSOB1v058h0o1_500.jpg', 50),
('Boarding for Echo', 35, 'https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/191092813_3932110270201762_2281588671947533866_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_ohc=YcDBrkYV6hQAX_39uOU&_nc_ht=scontent-iad3-2.xx&oh=0ed3a20a14df068ecd462e5ce0ee2d2b&oe=60E94F3E', 50),
('KitchenWare Mixer', 100, 'https://i.pinimg.com/originals/89/61/51/896151d084fc6ce5fc4364296f9d8434.jpg', 50),
('New Bedroom Set', 50, 'http://picture-cdn.wheretoget.it/9egjsk-l-610x610-home+accessory-home+decor-home+furniture-beautiful-bedroom-tumblr+bedroom-teen+bedrooms-boho+bedding-versace+bedding-bed+room+set-bedding-pillow-grey-white-crystal+chandelier-beach.jpg', 50),
('Pots and Pans Set', 75, 'http://www.lovethispic.com/uploaded_images/55279-Hang-Pots-And-Pans-On-The-Ceiling.jpg', 40),
('Bath Towels', 25, 'https://64.media.tumblr.com/0265c08d255b293564a3882fc7650a32/578660cae8d5995d-5e/s540x810/ca893a41e64cd3ca6d63b702c53557c9d0519cdc.jpg', 50),
('Vacuum', 125, 'https://64.media.tumblr.com/031b06bfa4cd347890f546a1b83afaea/a9e4127f95693a0f-0f/s1280x1920/007f5e712074dd01a672bc4cd7a4a2c86b11b9bf.jpg', 50),
('Suitcases', 75, 'https://i.pinimg.com/originals/61/88/83/618883ad887b8cba13fcf4069e2a2733.jpg', 10),
('Outdoor Grill', 45, 'https://64.media.tumblr.com/0ba43aade0eb1b597c1c3a961b350833/tumblr_n9dxyd2GFV1rq6c45o1_640.jpg', 40),
('Dutch Oven', 40, 'https://i.pinimg.com/474x/43/61/41/4361411b5454bf58a68cd028f783ab22.jpg', 40),
('Pet Gear for Echo', 20, 'https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/190670304_3932110280201761_3997121371206587878_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_ohc=xy_1mFmbnpcAX9MkplU&_nc_ht=scontent-iad3-2.xx&oh=2d2e790d281c75f2506fb0b548f30c9a&oe=60E72215', 50);