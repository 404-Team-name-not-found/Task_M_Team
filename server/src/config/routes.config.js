import { messagesRouter } from '../routers/messages.routers.js';

export const RoutesConfig = (app) => {
    app
        .use('/messages', messagesRouter)

        //dummy get for checking the server
        .get('/', (req, res) => {
            res.json({message: "The request give status 200 - Ok"})
        });
}