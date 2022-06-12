import express from "express";
import { genericController } from "../../controllers/generic.controller.js";
import { genericService } from "../../services/generic.service.js";
import { validatorSchema } from "../../services/validator.js";
//TODO: import messages controllers

const router = express.Router();
const schema = {
  id: {
    in: ["body"],
    isInt: true,
  },
  title: {
    in: ["body"],
    isString: true,
  },
  author: {
    in: ["body"],
    isString: true,
  },
  content: {
    in: ["body"],
    isString: true,
    optional: true,
  },
  taskid: {
    in: ["body"],
    init: true,
  },
};
const TABLE_NAME = "messages";

const { getItem, getItems, addItem, updateItem, deleteItem } = genericController(genericService(TABLE_NAME), schema, [], "message");

router.get("/all", validatorSchema, getItems);

router.get("/:id", validatorSchema, getItem);

router.post("/add", validatorSchema, addItem);

router.patch("/:id", validatorSchema, updateItem);

router.delete(":id", validatorSchema, deleteItem);

export default router;
