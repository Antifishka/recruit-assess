import { QuestionItem } from "./QuestionItem";
import PropTypes from 'prop-types';

export const QuestionList = ({ questions, getScore }) => {
    console.log("questions", questions);
    let correctCount = 0;

    const calculateCorrectAnswers = (selectedAnswer) => {
        console.log('Selected answer:', selectedAnswer);

        questions.forEach((question) => {
            if (selectedAnswer === question.answer) {
                correctCount++;
            }
        });
     
        getScore(correctCount);

        return correctCount;
    }

    return (
        <ul className="grow shrink basis-auto flex flex-col items-center gap-9 mb-6"> 
            {questions?.map(({ _id: id, title, description, options, answer }) =>
                <QuestionItem
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    options={options}
                    onAnswerChange={calculateCorrectAnswers} />)}
        </ul>
    )        
};

QuestionList.propTypes = {
    getScore: PropTypes.func.isRequired,
};