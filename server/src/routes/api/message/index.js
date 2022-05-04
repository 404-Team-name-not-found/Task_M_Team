const genericController = require("../../../../services/generic/generic.controller");
const { genericService } = require("../../../../services/generic/generic.service");

/**
 * Used as a router for the message's routes.
 *
 * @param fastify fastify instance
 * @param options
 * @param done
 */
function messageRoutes(fastify, options, done) {
  const schema = {
    id: { type: "number" },
    title: { type: "string" },
    author: { type: "string" },
    content: { type: "string" },
    taskid: { type: "number" },
  };
  const TABLE_NAME = "messages";

  const messageController = genericController(genericService(TABLE_NAME), schema, [], "message");
  fastify.get("/all", messageController.getItems);

  fastify.get("/:id", messageController.getItem);

  fastify.post("/add", messageController.addItem);

  fastify.patch("/edit/:id", messageController.updateItem);

  fastify.delete("/:id", messageController.deleteItem);

  done();
}

module.exports = messageRoutes;
