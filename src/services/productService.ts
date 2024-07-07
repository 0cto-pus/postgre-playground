import { Product } from '../models/product';

import pool from '../db';

export const getAllProducts = async (): Promise<Product[]> => {
  const result = await pool.query('SELECT * FROM products');
  return result.rows;
};

export const getProductById = async (id: number): Promise<Product> => {
  const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
  return result.rows[0];
};

export const createProduct = async (
  product: Omit<Product, 'id' | 'created_at'>
): Promise<void> => {
  await pool.query(
    'INSERT INTO products (name, description, price) VALUES ($1, $2, $3)',
    [product.name, product.description, product.price]
  );
};
