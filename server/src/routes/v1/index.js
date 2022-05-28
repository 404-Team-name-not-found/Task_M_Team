import express from "express";
//import messages from "./messages/messages.js";
import user from "./user/user.js";
const router = express.Router();

//router.use("/messages", messages);

router.use("/users", user);
export default router;
