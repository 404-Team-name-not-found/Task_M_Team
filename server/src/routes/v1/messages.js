import express from 'express';
import { genericController } from '../../controllers/generic.controller.js';
import { genericService } from '../../services/generic.service.js';
//TODO: import messages controllers

const router = express.Router();
const schema = {
    id: { type: "number" },
    title: { type: "string" },
    author: { type: "string" },
    content: { type: "string" },
    taskid: { type: "number" },
};
const TABLE_NAME = "messages";

const messageController = genericController(genericService(TABLE_NAME), schema, [], "message");

router.get('/all', messageController.getItems);

router.get('/:id', messageController.getItem);

router.post('/add', messageController.updateItem);

router.delete(':id', messageController.deleteItem);

export default router;