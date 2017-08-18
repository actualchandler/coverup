INSERT INTO orders (user_id, product_id, color, size, qty, price, completed_date, fulfilled)
VALUES ($1, $2, $3, $4, $5, $6, null, false)