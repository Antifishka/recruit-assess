const express = require('express');
const router = new express.Router();
const ctrl = require('../../controllers/questionsController');
const { asyncWrapper } = require('../../helpers/apiHelpers');

router.get('/', asyncWrapper(ctrl.getQuestions));
router.post('/', asyncWrapper(ctrl.createQuestion));

module.exports = router;