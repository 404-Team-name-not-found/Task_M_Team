const { getReasonPhrase, StatusCodes, ReasonPhrases } = require('http-status-codes');
const service = require('./group.service');

const group = {
    id: { type: 'number' },
    name: { type : 'string'},
    description: { type:'string'},
    imgUrl:{type: 'string'},
};

const defaultSchema = {
    tags: ['API group'],
    body: {
        type: 'object',
        properties: {
            ...group,
        },
    },
    response: {
        200: { description: 'Success response', type: 'object', properties: { responseTitle: { type: 'string' } } },
        400: { description: 'Bad request', type: 'object', properties: { responseTitle: { type: 'string' }, error: {} } },
    },
};

const getgroups = {
    schema: {
        tags: defaultSchema.tags,
        description: '',
        response: {
            200: {
                description: 'Success response',
                type: 'object',
                properties: {
                    responseTitle: { type: 'string' },
                    groups: {
                        type: 'array',
                        items: { type: 'object', properties: { ...group } }
                    }
                }
            },
            400: { description: 'Bad request', type: 'object', properties: { responseTitle: { type: 'string' }, error: {} } },
        }
    },
    handler: async (req, reply) => {
        try {
            const { groups, status, error } = await service.getgroups();
            reply.code(status).send({ responseTitle: getReasonPhrase(status), groups, ...(error ? { error } : {}) });
        } catch (err) { reply.code(StatusCodes.BAD_REQUEST).send({ responseTitle: getReasonPhrase(StatusCodes.BAD_REQUEST), error: { message: err } }); }
    }
};

const getgroup = {
    schema: {
        tags: defaultSchema.tags,
        description: '',
        params: {
            id: { type: 'number' },
        },
        response: {
            200: {
                description: 'Success response',
                type: 'object',
                properties: {
                    responseTitle: { type: 'string' },
                    group: { type: 'object', properties: { ...group } },
                },
            },
            400: { description: 'Bad request', type: 'object', properties: { responseTitle: { type: 'string' }, error: {} } },
        }
    },
    handler: async (req, reply) => {
        const { id } = req.params;
        try {
            const { group, status, error } = await service.getgroup(id);
            reply.code(status).send({ responseTitle: getReasonPhrase(status), group, ...(error ? { error } : {}) });
        } catch (err) { reply.code(StatusCodes.BAD_REQUEST).send({ responseTitle: getReasonPhrase(StatusCodes.BAD_REQUEST), error: { message: err } }); }
    }
}

const addgroup = {
    schema: {
        tags: defaultSchema.tags,
        body: {
            type: 'object',
            required: ['name', 'creator', 'creationDate'],
            properties: {
                ...group,
            },
        },
        response: defaultSchema.response,
        description: ''
    },
    handler: async (req, reply) => {
        try {
            const { status, error } = await service.addgroup(req.body);
            reply.code(status).send({ responseTitle: status === 200 ? "The group was created successfully" : getReasonPhrase(status), ...(error ? { error } : {}) });
        } catch (err) { reply.code(StatusCodes.BAD_REQUEST).send({ responseTitle: getReasonPhrase(StatusCodes.BAD_REQUEST), error: { message: err } }); }
    }
};

const updategroup = {
    schema: {
        tags: defaultSchema.tags,
        params: {
            id: { type: 'number' },
        },
        body: defaultSchema.body,
        response: defaultSchema.response,
        description: '',
    },
    handler: async (req, reply) => {
        const { id } = req.params;
        try {
            const { status, error } = await service.updategroup(id, req.body);
            reply.code(status).send({ responseTitle: status === 200 ? "The group was updated successfully" : getReasonPhrase(status), ...(error ? { error } : {}) });
        } catch (err) { reply.code(StatusCodes.BAD_REQUEST).send({ responseTitle: getReasonPhrase(StatusCodes.BAD_REQUEST), error: { message: err } }); }
    }
};

const deletegroup = {
    schema: {
        tags: defaultSchema.tags,
        params: {
            id: { type: 'number' },
        },
        response: defaultSchema.response
    },
    handler: async (req, reply) => {
        const { id } = req.params;
        try {
            const { status, error } = await service.deletegroup(id);
            reply.code(status).send({ responseTitle: status === 200 ? "The group was deleted successfully" : getReasonPhrase(status), ...(error ? { error } : {}) });
        } catch (err) { reply.code(StatusCodes.BAD_REQUEST).send({ responseTitle: getReasonPhrase(StatusCodes.BAD_REQUEST), error: { message: err } }); }
    }
}

module.exports = { getgroups, getgroup, addgroup, updategroup, deletegroup, };