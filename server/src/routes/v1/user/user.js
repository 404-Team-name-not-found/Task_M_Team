import express from "express";
import { genericController } from "../../../controllers/generic.controller.js";
import { genericService } from "../../../services/generic.service.js";
import { validatorSchema } from "../../../services/validator.js";
import { userValidationSchema } from "../../../utils/validationSchemas.js";

import bcrypt from "bcrypt";
//TODO: import messages controllers

import jwt from "jsonwebtoken";

const router = express.Router();

const TABLE_NAME = "users";

const { getItem, getItems, addItem, updateItem, deleteItem } = genericController(genericService(TABLE_NAME), {}, [], "users");

router.post("/login", userValidationSchema, validatorSchema, (req, res) => {
  const { username, password } = req.body;
  const user = getItem(req, res);
  if (!user) {
    return res.status(400).json({
      error: "User not found",
    });
  }
  const validPassword = bcrypt.compareSync(password, user.password);
  if (user.password !== validPassword) {
    return res.status(400).json({
      error: "Password is incorrect",
    });
  }
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });
  res.header("auth-token", token).status(200);
});

router.post("/register", userValidationSchema, validatorSchema, async (req, res) => {
  const { username, password, email, name } = req.body;
  const userExists = await genericService(TABLE_NAME).getitem("username", username);
  if (userExists) {
    if (userExists.username === username) {
      return res.status(400).json({
        error: "User already exists",
      });
    }
    if (userExists.email === email) {
      return res.status(400).json({
        error: "Email already exists",
      });
    }
  }

  //create the user and hash the password and save it to the database
  try {
    const hashedpassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedpassword;
    const user = await addItem(req, res);
  } catch (error) {
    console.log(error);
  }
});

export default router;
