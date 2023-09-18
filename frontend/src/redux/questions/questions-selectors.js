export const selectQuestions = state => state.questions.questions;

export const selectIsLoading = state => state.questions.isLoading;

export const selectError = state => state.questions.error;

// export const selectCorrectCount = createSelector(
//     [selectQuestions, selectAnswer],
//     (questions, selectedAnswer) => {
//         const correctCount = questions.reduce((count, question) => {
//             if (question.answer === selectedAnswer) {
//                 return count + 1;
//             }
//             return count;
//         }, 0);

//         console.log("correctCount", correctCount)
//         return correctCount;
// });