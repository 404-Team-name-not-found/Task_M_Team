const { getgroups, getgroup, addgroup, updategroup, deletegroup, } = require('./group.controller.js');
     
/**
 * Used as a router for the group's routes.
 *
 * @param fastify fastify instance
 * @param options
 * @param done
 */
function groupRoutes(fastify, options, done) {

    fastify.get('/all', getgroups);
    
    fastify.get('/:id', getgroup);
    
    fastify.post('/add', addgroup);
    
    fastify.patch('/edit/:id', updategroup);
    
    fastify.delete('/:id', deletegroup);
    
    done();
};
    
module.exports = groupRoutes;