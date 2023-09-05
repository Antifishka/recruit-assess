const express = require('express');
const router = new express.Router();
const { asyncWrapper } = require('../../helpers/apiHelpers');
const { ctrlSignup, ctrlLogin, ctrlLogout, ctrlCurrent } = require('../../controllers/authController');
const { authMiddleware } = require('../../middlewares');

router.post('/users/signup', asyncWrapper(ctrlSignup));
router.post('/users/login', asyncWrapper(ctrlLogin));
router.get('/users/logout', authMiddleware, asyncWrapper(ctrlLogout));
router.get('/users/current', authMiddleware, asyncWrapper(ctrlCurrent));

module.exports = router;