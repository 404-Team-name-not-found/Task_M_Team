import Router from 'express';
import { genericController } from '../controllers/generic.controller.js';
import { genericService } from '../services/generic.service.js';
//TODO: import messages controllers

//The messages Router
export const messagesRouter = Router();

const schema = {
    id: { type: "number" },
    title: { type: "string" },
    author: { type: "string" },
    content: { type: "string" },
    taskid: { type: "number" },
};
const TABLE_NAME = "messages"

const messageController = genericController(genericService(TABLE_NAME), schema, [], "message");
//Messages Requests
messagesRouter
    //GET Requests
    .get('/all', messageController.getItems)
    .get('/:id', messageController.getItem)
    //POST Requests
    .post('/add', messageController.addItem)

    .patch('/edit/:id', messageController.updateItem)

    //TODO: find replacement for delete
    .delete('/:id', messageController.deleteItem)