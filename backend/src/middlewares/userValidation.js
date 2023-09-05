const Joi = require('joi');
const { ValidatoinError } = require('../helpers/errors');

module.exports = {
    userPostValidation: (req, res, next) => {
        const schema = Joi.object({
            password: Joi.string()
                .min(6)
                .max(30)
                .required(),
            email: Joi.string()
                .email({minDomainSegments: 2, tlds: {allow: ['com', 'net']}})
                .required(),
            nickname: Joi.string()
                .min(2)
                .max(30)
                .optional(),
            avatarURL: Joi.string()
                .optional(),
            token: Joi.string()
                .optional(),
        });

        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
            next(new ValidatoinError("Invalid fields"));
        }

        next();
    },
};