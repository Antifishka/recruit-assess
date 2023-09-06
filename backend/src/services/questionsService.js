const { Question } = require('../models/questionModel');
const { NotFoundError } = require('../helpers/errors');

const listQuestions = async () => {
  try {
    const questions = await Question.find({})
    const totalQuestions = await Question.countDocuments();
   
    return { questions, totalQuestions };
  } catch (error) {
    console.error(error);
  }
};

const addQuestion = async (questionData, owner) => {
  try {
    const newQuestion = await Question.create({ ...questionData, owner });

    return newQuestion;
  } catch (error) {
    console.error(error);
  }
};

const deleteQuestion = async (questionId) => {
  try {
    const deletedQuestion = await Question.findByIdAndRemove(
      { _id: questionId });

    if (!deletedQuestion) {
      throw new NotFoundError(`Question with id '${questionId}' not found`);
    };

  } catch (error) {
    console.error(error);
    throw error;
  }
};

const updateQuestion = async (questionId, questionData) => {
  try {
    const updatedQuestion = await Question.findByIdAndUpdate(
      { _id: questionId },
      { ...questionData },
      { new: true });

    if (!updatedQuestion) {
      throw new NotFoundError(`Question with id '${questionId }' not found`);
    };

    return updatedQuestion;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  listQuestions,
  addQuestion,
  deleteQuestion,
  updateQuestion,
};