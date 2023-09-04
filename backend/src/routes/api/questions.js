const express = require('express');
const router = new express.Router();
const ctrl = require('../../controllers/questionsController');

router.get('/', ctrl.getQuestions);

module.exports = router;