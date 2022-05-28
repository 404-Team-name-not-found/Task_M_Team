import { body, header } from "express-validator";

export const userValidationSchema = [
  body("username").isString().isLength({ min: 6, max: 50 }).withMessage("username must be between 3 and 50 characters"),
  body("password").isString().isLength({ min: 6, max: 30 }).withMessage("password must be between 6 and 30 characters"),
  body("email").isEmail().withMessage("email must be a valid email address"),
  body("imgurl").isURL().withMessage("imgurl must be a valid url"),
  body("name").isString().isLength({ min: 3, max: 50 }).withMessage("name must be between 3 and 50 characters"),
];
