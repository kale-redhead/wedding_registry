select * from item_cart_junction j
join items i on j.item_id = i.item_id
where j.cart_id = $1
order by j.item_id;