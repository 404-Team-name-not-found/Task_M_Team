import Pool from 'pg';
import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.DATABASE_HOST_NAME);
export const pool = new Pool({
  host: process.env.DATABASE_HOST_NAME,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});
