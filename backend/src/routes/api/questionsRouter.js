const express = require('express');
const router = new express.Router();
const ctrl = require('../../controllers/questionsController');
const { asyncWrapper } = require('../../helpers/apiHelpers');
const { authMiddleware, isValidId } = require('../../middlewares');

router.get('/', asyncWrapper(ctrl.getQuestions));
router.post('/', authMiddleware, asyncWrapper(ctrl.createQuestion));
router.delete('/:questionId', authMiddleware, isValidId, asyncWrapper(ctrl.removeQuestion));
router.patch('/:questionId', authMiddleware, isValidId, asyncWrapper(ctrl.changeQuestion));

module.exports = router;