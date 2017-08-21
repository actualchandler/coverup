DELETE FROM orders
WHERE user_id = $1 AND order_id = $2