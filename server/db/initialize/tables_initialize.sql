CREATE TABLE IF NOT EXISTS users (
  user_id SERIAL PRIMARY KEY,
  name_first text,
  name_last text,
  email text UNIQUE
);

CREATE TABLE IF NOT EXISTS orders (
  order_id SERIAL PRIMARY KEY,
  user_id int,
  completed_date text,
  fulfilled text
);

CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  description text,
  fabric text,
  price decimal,
  image_url text,
  sizes text,
  colors text,
  shop text,
  product_id integer
);

CREATE TABLE IF NOT EXISTS product_in_order (
  pio_id SERIAL PRIMARY KEY,
  order_id int,
  product_id int,
  qty int
);
