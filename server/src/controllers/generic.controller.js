import getReasonPhrase from 'http-status-codes';
import StatusCodes from 'http-status-codes';

export const genericController = (service, itemSchema, requiredParams, itemName) => {
    const defaultSchema = {
        tags: [`Api ${itemName}`],
        body: {
            type: "object",
            properties: {
                ...itemSchema,
            },
        },
        response: {
            200: { description: "Success response", type: "object", properties: { responseTitle: { type: "string" } } },
            400: { description: "Bad request", type: "object", properties: { responseTitle: { type: "string" }, error: {} } },
        },
    };

    const getItems = {
        schema: {
            tags: defaultSchema.tags,
            description: "",
            response: {
                200: {
                    description: "Success response",
                    type: "object",
                    properties: {
                        responseTitle: { type: "string" },
                        items: {
                            type: "array",
                            items: { type: "object", properties: { ...itemSchema } },
                        },
                    },
                },
                400: { description: "Bad request", type: "object", properties: { responseTitle: { type: "string" }, error: {} } },
            },
        },
        handler: async (req, reply) => {
            try {
                const { items, status, error } = await service.getitems();
                reply.code(status).send({ responseTitle: getReasonPhrase(status), items, ...(error ? { error } : {}) });
            } catch (err) {
                reply.code(StatusCodes.BAD_REQUEST).send({ responseTitle: getReasonPhrase(StatusCodes.BAD_REQUEST), error: { message: err } });
            }
        },
    };

    const getItem = {
        schema: {
            tags: defaultSchema.tags,
            description: "",
            params: {
                id: { type: "number" },
            },
            response: {
                200: {
                    description: "Success response",
                    type: "object",
                    properties: {
                        responseTitle: { type: "string" },
                        item: { type: "object", properties: { ...itemSchema } },
                    },
                },
                400: { description: "Bad request", type: "object", properties: { responseTitle: { type: "string" }, error: {} } },
            },
        },
        handler: async (req, reply) => {
            const { id } = req.params;
            try {
                const { item, status, error } = await service.getitem(id);
                reply.code(status).send({ responseTitle: getReasonPhrase(status), item, ...(error ? { error } : {}) });
            } catch (err) {
                reply.code(StatusCodes.BAD_REQUEST).send({ responseTitle: getReasonPhrase(StatusCodes.BAD_REQUEST), error: { message: err } });
            }
        },
    };

    const addItem = {
        schema: {
            tags: defaultSchema.tags,
            body: {
                type: "object",
                required: requiredParams,
                properties: {
                    ...itemSchema,
                },
            },
            response: defaultSchema.response,
            description: "",
        },
        handler: async (req, reply) => {
            try {
                const { status, error } = await service.additem(req.body);
                reply.code(status).send({ responseTitle: status === 200 ? `The ${itemName} was created successfully` : getReasonPhrase(status), ...(error ? { error } : {}) });
            } catch (err) {
                reply.code(StatusCodes.BAD_REQUEST).send({ responseTitle: getReasonPhrase(StatusCodes.BAD_REQUEST), error: { message: err } });
            }
        },
    };

    const updateItem = {
        schema: {
            tags: defaultSchema.tags,
            params: {
                id: { type: "number" },
            },
            body: defaultSchema.body,
            response: defaultSchema.response,
            description: "",
        },
        handler: async (req, reply) => {
            const { id } = req.params;
            try {
                const { status, error } = await service.updateitem(id, req.body);
                reply.code(status).send({ responseTitle: status === 200 ? `The ${itemName} was updated successfully` : getReasonPhrase(status), ...(error ? { error } : {}) });
            } catch (err) {
                reply.code(StatusCodes.BAD_REQUEST).send({ responseTitle: getReasonPhrase(StatusCodes.BAD_REQUEST), error: { message: err } });
            }
        },
    };

    const deleteItem = {
        schema: {
            tags: defaultSchema.tags,
            params: {
                id: { type: "number" },
            },
            response: defaultSchema.response,
        },
        handler: async (req, reply) => {
            const { id } = req.params;
            try {
                const { status, error } = await service.deleteitem(id);
                reply.code(status).send({ responseTitle: status === 200 ? `The ${itemName} was deleted successfully` : getReasonPhrase(status), ...(error ? { error } : {}) });
            } catch (err) {
                reply.code(StatusCodes.BAD_REQUEST).send({ responseTitle: getReasonPhrase(StatusCodes.BAD_REQUEST), error: { message: err } });
            }
        },
    };
    return { getItem, getItems, updateItem, deleteItem, addItem };
};