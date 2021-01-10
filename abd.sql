CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE books(
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  book_name VARCHAR(200) NOT NULL,
  book_desc TEXT NOT NULL,
  sold BOOLEAN NOT NULL 
);

CREATE TABLE customers(
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
  book_id uuid REFERENCES books(id) NOT NULL,
  book_name VARCHAR(200) NOT NULL,
  customer_name VARCHAR(200) NOT NULL,
  phone_no VARCHAR(200) NOT NULL
);
