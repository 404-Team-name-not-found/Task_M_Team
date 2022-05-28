import router from './v1/index.js';
import express from 'express';


export default (app) => {
    app.use(express.json());

    app.use('/api/v1', router);

    //dummy route
    app.get('/api/v1/', (req, res) => {
        res.send("Server is running");
    });
}