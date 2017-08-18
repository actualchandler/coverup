INSERT INTO users (name_first, name_last, user_id)
VALUES ($1, $2, $3)
RETURNING *