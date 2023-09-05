const { Question } = require('../models/questionModel');

const listQuestions = async () => {
  try {
    const questions = await Question.find({})
    const totalQuestions = await Question.countDocuments();
   
    return { questions, totalQuestions };
  } catch (error) {
    console.error(error);
  }
};

const addQuestion = async (questionData) => {
  try {
    const newQuestion  = await Question.create(questionData);

    return newQuestion;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  listQuestions,
  addQuestion,
};