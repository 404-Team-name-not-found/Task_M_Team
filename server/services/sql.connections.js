const { Pool } = require("pg");
require("dotenv").config();
console.log(process.env.DATABASE_HOST_NAME);
const pool = new Pool({
  host: process.env.DATABASE_HOST_NAME,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

exports.pool = pool;
