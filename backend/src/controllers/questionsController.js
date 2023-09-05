const {
    listQuestions,
} = require('../services/questionsService');

const getQuestions = async (req, res, next) => {
  const questions = await listQuestions();
  res.status(200).json({questions, status: 'success'});
}

module.exports = {
  getQuestions,
}