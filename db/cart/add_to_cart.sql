INSERT INTO item_cart_junction
(cart_id, item_id, quantity)
VALUES
($1, $2, 1);
SELECT * FROM item_cart_junction j
JOIN items i ON j.item_id = i.item_id
WHERE j.cart_id = $1
ORDER BY j.item_id;