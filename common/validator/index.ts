import Joi from 'joi';

// Definir un esquema
const minimalRequestValidator = Joi.object({
    url: Joi.string().min(10).required(),
    path: Joi.string().empty(''),
    type: Joi.string().empty(''),
    headers: Joi.any(),
    body: Joi.any(),
});


export const validateMinimalRequest = (data: object): { valid: boolean, errors: any[] } => {
    const { error, value } = minimalRequestValidator.validate(data)
    const response = {
        valid: error === undefined,
        errors: error?.details ?? null
    }
    return response
}

