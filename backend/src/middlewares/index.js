const { authMiddleware } = require('./authMiddleware');
const uploadCloud = require('./uploadMiddleware');

module.exports = {
    authMiddleware,
    uploadCloud,
}