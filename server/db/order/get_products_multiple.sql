SELECT *
FROM products AS p
JOIN product_in_order AS pio
ON p.product_id = pio.product_id
WHERE pio.order_id = ANY($1)