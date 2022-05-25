import { checkSchema } from 'express-validator';

export function validatorSchema(obj) {
    return checkSchema(obj);
}