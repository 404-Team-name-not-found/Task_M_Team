import v1API from './v1/index.js';
import express from 'express';


export default (app) => {
    app.use(express.json());

    app.use('/api/v1', v1API);
    
}