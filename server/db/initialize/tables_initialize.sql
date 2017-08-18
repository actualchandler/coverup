CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  user_id TEXT,
  name_first TEXT,
  name_last TEXT,
  );

CREATE TABLE IF NOT EXISTS orders (
    order_id SERIAL PRIMARY KEY,
    user_id TEXT,
    product_id TEXT,
    color TEXT,
    size TEXT,
    qty TEXT,
    price DECIMAL
    completed_date TEXT,
    fulfilled BOOLEAN
    );

CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  description TEXT,
  fabric TEXT,
  price DECIMAL,
  image_url TEXT,
  sizes TEXT,
  colors TEXT,
  shop TEXT,
  product_id TEXT
  );
