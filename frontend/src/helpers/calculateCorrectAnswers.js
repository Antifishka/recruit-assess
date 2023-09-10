export const calculateCorrectAnswers = (selectedAnswer) => {
    console.log('Selected answer:', selectedAnswer);

    questions.forEach((question) => {
        if (selectedAnswer === question.answer) {
            correctCount++;
        }
    })

    return correctCount;
}