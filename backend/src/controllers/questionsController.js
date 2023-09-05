const {
  listQuestions,
  addQuestion,
} = require('../services/questionsService');

const getQuestions = async (req, res, next) => {
  const { questions, totalQuestions } = await listQuestions();

  res.status(200).json({ questions, total: totalQuestions });
}

const createQuestion = async (req, res, next) => {
  console.log("req.user", req.user);
  // const { _id: owner } = req.user;

  const newQuestion = await addQuestion(req.body);
    
  res.status(201).json({ newQuestion });
};

module.exports = {
  getQuestions,
  createQuestion,
}