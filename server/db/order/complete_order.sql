UPDATE orders
SET completed_date = $2
WHERE order_id = $1