import validator from 'express-validator';

export function validatorSchema(obj) {
    return validator.checkSchema(obj);
}