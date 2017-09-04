INSERT INTO product_in_order(order_id, product_id, color, size, qty)
VALUES ($1, $2, $3, $4, $5)
RETURNING *