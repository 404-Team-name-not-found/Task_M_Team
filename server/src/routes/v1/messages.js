import express from 'express';
import { genericController,  } from '../../controllers/generic.controller.js';
import { genericService } from '../../services/generic.service.js';
import {validatorSchema} from "../../services/validator";
//TODO: import messages controllers

const router = express.Router();
const schema = {
    id: {
        in: ["body"],
        isInt: true
    },
    title:
        {
            in: ["body"],
            isString: true
        },
    author:
        {
            in: ["body"],
            isString: true
        },
    content:
        {
            in: ["body"],
            isString: true,
            optional: true
        },
    taskid:
        {
            in: ["body"],
            init: true
        },
};
const TABLE_NAME = "messages";

const { getItem, getItems, addItem, updateItem, deleteItem } = genericController(genericService(TABLE_NAME), schema, [], "message");

router.get('/all', validatorSchema(schema), getItems);

router.get('/:id', validatorSchema(schema), getItem);

router.post('/add', validatorSchema(schema), addItem);

router.patch('/:id', validatorSchema(schema), updateItem);

router.delete(':id', validatorSchema(schema), deleteItem);

export default router;