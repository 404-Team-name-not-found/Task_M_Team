import v1Api from './v1';
import express from 'express';


export default (app) => {
    app.use(express.json());

    app.use('api/v1', v1Api);
}