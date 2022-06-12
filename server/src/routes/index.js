import v1Api from "./v1/index.js";
import express from "express";

const router = express.Router();
router.use("/", v1Api);

export default router;
