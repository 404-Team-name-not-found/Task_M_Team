import express from 'express';
import { RoutesConfig } from './config/routes.config.js';

export const app = express();
const PORT = process.env.PORT || 3000;

//TODO: add a function for database connection

//Tells express to parse the json data coming into an object and be accessable via "request.body"
app.use(express.json());
express.use(express.urlencoded({extended: true}));

//Using a router for organazing the requests
RoutesConfig(app);


//Running the server ~ The port is inside the ENV file
export const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});