import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.POSTGRES_PASSWORD);
export const pool = new pg.Pool({
  host: process.env.DATABASE_HOST_NAME,
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});
