let correctCount = 0;

export const calculateCorrectAnswers = (questions, selectedAnswer) => {
    questions.forEach((question) => {
        if (selectedAnswer === question.answer) {
            correctCount++;
        }
    })

    return correctCount;
}