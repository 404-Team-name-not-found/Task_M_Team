import express from "express";
import routes from "./routes/index.js";
import bodyparser from "body-parser";
import dotenv from "dotenv";
const app = express();

const PORT = process.env.PORT || 3000;
dotenv.config();
//routes(app);
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use("/api/v1", routes);
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
