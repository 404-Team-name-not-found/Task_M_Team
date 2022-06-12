import dotenv from "dotenv";
dotenv.config();

import express from "express";
import routes from "./routes/index.js";
import bodyparser from "body-parser";
import enviorments from "./connections/databases/enviorments";

import pg from './connections/databases/pg';
const app = express();

const pgConfInfo = enviorments[process.env.NODE_ENV];
const PORT = process.env.PORT || 3000;

//routes(app);

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use("/api/v1", routes);

app.use(express.json());
app.listen(PORT, async () => {
  await pg.connect(pgConfInfo);
  console.log(`Server is running on port ${PORT}`);
});
