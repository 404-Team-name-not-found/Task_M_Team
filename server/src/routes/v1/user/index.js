import express from "express";
import user from "./user.js";

const router = express.Router();

router.use("/", user);
export default router;
