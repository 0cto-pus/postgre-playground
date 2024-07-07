import { Pool } from 'pg';
import dotEnv from 'dotenv';
dotEnv.config();
const pool = new Pool({
  user: 'myuser',
  host: 'localhost',
  database: 'mydb',
  password: process.env.DB_PASS,
  port: 5432,
});

export default pool;
