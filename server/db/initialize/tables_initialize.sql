CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  user_id TEXT UNIQUE,
  name_first TEXT,
  name_last TEXT,
  email TEXT unique
  );

CREATE TABLE IF NOT EXISTS orders (
    order_id SERIAL PRIMARY KEY,
    user_id TEXT,
    product_id TEXT,
    completed_date TEXT,
    fulfilled BOOLEAN
    );

CREATE TABLE IF NOT EXISTS product_in_order (
  pio_id SERIAL PRIMARY KEY,
  order_id INTEGER,
  product_id TEXT,
  color TEXT,
  size TEXT,
  qty TEXT
)

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
