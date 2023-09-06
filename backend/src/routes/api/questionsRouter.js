const express = require('express');
const router = new express.Router();
const ctrl = require('../../controllers/questionsController');
const { asyncWrapper } = require('../../helpers/apiHelpers');
const { authMiddleware, isValidId } = require('../../middlewares');

router.use(authMiddleware);

router.get('/', asyncWrapper(ctrl.getQuestions));
router.post('/', asyncWrapper(ctrl.createQuestion));
router.delete('/:questionId', isValidId, asyncWrapper(ctrl.removeQuestion));
router.patch('/:questionId', isValidId, asyncWrapper(ctrl.changeQuestion));

module.exports = router;