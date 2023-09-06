const {
  listQuestions,
  addQuestion,
  deleteQuestion,
  updateQuestion,
} = require('../services/questionsService');

const getQuestions = async (req, res, next) => {
  const { questions, totalQuestions } = await listQuestions();

  res.status(200).json({ questions, total: totalQuestions });
}

const createQuestion = async (req, res, next) => {
  console.log("req.user", req.user);
  const { _id: owner } = req.user;

  const newQuestion = await addQuestion(req.body, owner);
    
  res.status(201).json({ newQuestion });
};

const removeQuestion = async (req, res, next) => {
  const { _id: owner } = req.user;

  await deleteQuestion(req.params.questionId, owner);
  
  res.status(200).json({message: 'question deleted'});
};

const changeQuestion = async (req, res, next) => {
    const { questionId } = req.params;
    // const { _id: owner } = req.user;

    const updatedQuestion = await updateQuestion(questionId , req.body);

    res.status(200).json({ updatedQuestion });
};

module.exports = {
  getQuestions,
  createQuestion,
  removeQuestion,
  changeQuestion,
}