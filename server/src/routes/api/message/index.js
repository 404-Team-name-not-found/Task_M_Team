
const genericController=require('../../../../services/generic/generic.controller');
const {genericService}=require('../../../../services/generic/generic.service');

/**
 * Used as a router for the group's routes.
 *
 * @param fastify fastify instance
 * @param options
 * @param done
 */
function messageRoutes(fastify, options, done) {

    const schema={
    id: { type: 'number' },
    name: { type: 'string' },
    description: { type: 'string' },
    estimation: { type: 'number' },
    creationDate: { type: 'string', "format": "date"},
    endDate: { type: 'string', "format": "date"},
    status: { type: 'string' },
    assignedTo: { type: 'number' },
    creator: { type: 'number' },
    sprintId: { type: 'number' },
    storyId: { type: 'number' },
    groupId: { type: 'number' },
    };
    const TABLE_NAME="tasks";
    
    
const messageController=genericController(genericService(TABLE_NAME),schema,'tasks testing');
    fastify.get('/all', messageController.getItems);
    
     fastify.get('/:id', messageController.getItem);
    
     fastify.post('/add', messageController.addItem);
    
     fastify.patch('/edit/:id', messageController.updateItem);
    
     fastify.delete('/:id', messageController.deleteItem);
    
    done();
};
    
module.exports = messageRoutes;



