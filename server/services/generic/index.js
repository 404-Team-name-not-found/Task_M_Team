
   
const genericRouter=(Controller)=>{
/**
 * Used as a router for the Item's routes.
 *
 * @param fastify fastify instance
 * @param options
 * @param done
 */


function itemRoutes(fastify, options, done) {

    fastify.get('/all', Controller.getItems);
    
    fastify.get('/:id', Controller.getItem);
    
    fastify.post('/add', Controller.addItem);
    
    fastify.patch('/edit/:id', Controller.updateItem);
    
    fastify.delete('/:id', Controller.deleteItem);
    
    done();
}

}

    
module.exports = {genericRouter};