import { useSelector } from 'react-redux';
import { selectQuestions } from '../redux/questions/questions-selectors';
import { calculateCorrectAnswers } from '../helpers/calculateCorrectAnswers';
import { QuestionItem } from "./QuestionItem";
import PropTypes from 'prop-types';

export const QuestionList = ({ getScore }) => {
    const questions = useSelector(selectQuestions);
    
    const getCorrectCount = (selectedAnswer) => {
        const correctCount = calculateCorrectAnswers(questions, selectedAnswer);

        getScore(correctCount);
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
                    onAnswerChange={getCorrectCount} />)}
        </ul>
    )        
};

QuestionList.propTypes = {
    getScore: PropTypes.func.isRequired,
};