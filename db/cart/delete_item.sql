delete from item_cart_junction
where cart_id = $1 and item_id = $2;
select * from item_cart_junction j
where j.cart_id = $1
order by j.item_id;