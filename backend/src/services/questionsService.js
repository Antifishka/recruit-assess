const fs = require('fs/promises')
const path = require('path');
require('colors');

const questionsPath = path.join(__dirname, "questions.json");

const listQuestions = async () => {
  try {
    const data = await fs.readFile(questionsPath, 'utf8');
    const questions = JSON.parse(data);
    console.table(questions);
    console.log(`Total contacts: ${questions.length}`.green);
    return questions;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  listQuestions,
};