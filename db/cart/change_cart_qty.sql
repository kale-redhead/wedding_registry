UPDATE item_cart_junction
SET quantity = $3
WHERE cart_id = $1 AND item_id = $2;
SELECT * FROM item_cart_junction j
JOIN items i ON j.item_id = i.item_id
WHERE j.cart_id = $1
ORDER BY j.item_id;