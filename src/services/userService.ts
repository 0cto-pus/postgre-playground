import { User } from '../models/user';

import pool from '../db';

export const getAllUsers = async (): Promise<User[]> => {
  const result = await pool.query('SELECT * FROM users');
  return result.rows;
};

export const getUserById = async (id: number): Promise<User> => {
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  return result.rows[0];
};

export const createUser = async (
  user: Omit<User, 'id' | 'created_at'>
): Promise<void> => {
  const result = await pool.query(
    'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
    [user.name, user.email]
  );
  return result.rows[0];
};
