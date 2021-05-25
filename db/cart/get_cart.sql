select cart_id from carts
where user_id = $1 and active = true;