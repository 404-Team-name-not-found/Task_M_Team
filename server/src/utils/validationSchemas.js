import { body, header } from "express-validator";

export const userValidationSchema = [
  body("username").exists().isString().isLength({ min: 6, max: 50 }).withMessage("username must be between 3 and 50 characters"),
  body("password").exists().isString().isLength({ min: 6, max: 30 }).withMessage("password must be between 6 and 30 characters"),
  body("email").exists().isEmail().withMessage("email must be a valid email address"),
  body("imgurl").isURL().withMessage("imgurl must be a valid url"),
  body("name").isString().isLength({ min: 3, max: 50 }).withMessage("name must be between 3 and 50 characters"),
];

export const commentValidationSchema = [
  body("content").exists().isString().isLength({ min: 1, max: 500 }).withMessage("content must be between 1 and 500 characters"),
  body("author").exists().isInt().withMessage("author must be an integer"),
  body("taskid").exists().isInt().withMessage("taskid must be an integer"),
  body("creationdate").exists().isISO8601().withMessage("creationdate must be a valid date"),
];

export const groupValidationSchema = [
  body("name").exists().isString().isLength({ min: 3, max: 50 }).withMessage("name must be between 3 and 50 characters"),
  body("description").exists().isString().isLength({ min: 3, max: 500 }).withMessage("description must be between 3 and 500 characters"),
  body("imgurl").exists().isURL().withMessage("imgurl must be a valid url"),
];

export const taskValidationSchema = [
  body("title").exists().isString().isLength({ min: 3, max: 50 }).withMessage("title must be between 3 and 50 characters"),
  body("description").exists().isString().isLength({ min: 3, max: 500 }).withMessage("description must be between 3 and 500 characters"),
  body("creationdate").exists().isISO8601().withMessage("creationdate must be a valid date"),
  body("enddate").exists().isISO8601().withMessage("enddate must be a valid date"),
  body("assingedto").exists().isInt().withMessage("assingedto must be an integer"),
  body("creator").exists().isInt().withMessage("creator must be an integer"),
  body("groupid").exists().isInt().withMessage("groupid must be an integer"),
  body("estimation").exists().isInt().withMessage("estimation must be an integer"),
  body("status").exists().isString().isLength({ min: 3, max: 50 }).withMessage("status must be between 3 and 50 characters"),
  //might need to add more validations later
];
