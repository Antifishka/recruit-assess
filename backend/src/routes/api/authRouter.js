const express = require('express');
const router = new express.Router();
const { asyncWrapper } = require('../../helpers/apiHelpers');
const { ctrlSignup, ctrlLogin, ctrlLogout, ctrlCurrent, ctrlChangeAvatar } = require('../../controllers/authController');
const { authMiddleware, uploadCloud } = require('../../middlewares');

router.post('/users/signup', asyncWrapper(ctrlSignup));
router.post('/users/login', asyncWrapper(ctrlLogin));
router.get('/users/logout', authMiddleware, asyncWrapper(ctrlLogout));
router.get('/users/current', authMiddleware, asyncWrapper(ctrlCurrent));
router.patch('/users/avatar',
    authMiddleware,
    uploadCloud.single('avatarURL'),
    asyncWrapper(ctrlChangeAvatar))

module.exports = router;