const { NotFoundError } = require('../helpers/errors');
const { isValidObjectId } = require('mongoose');

const isValidId = (req, res, next) => {
    const { questionId } = req.params;

    if (!isValidObjectId(questionId)) {
        next(new NotFoundError("Invalid id"))
    }

    next();
};

module.exports = isValidId;