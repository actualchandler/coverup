SELECT *
FROM product_in_order AS pio
WHERE
   pio.product_id = $1 AND
   pio.order_id = $2 AND
   pio.color = $3 AND
   pio.size = $4