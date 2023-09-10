import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { selectQuestions, selectIsLoading, selectError } from '../redux/questions/questions-selectors';
import { fetchQuestions } from '../redux/questions/questions-operations';
import { AddButton } from "../components/AddButton";
import { Loader } from '../components/Loader';
import { QuestionList } from '../components/QuestionList';
import toast from 'react-hot-toast';

export default function Tests() {
    const [result, setResult] = useState(null);
    const dispatch = useDispatch();
    const questions = useSelector(selectQuestions);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchQuestions());
        error && toast.error('No response from server!');
    }, [dispatch, error]);

    const getPercentageScore = (correctCount) => {
        console.log("correctCount", correctCount);
        const totalQuestions = questions.length;
        return Math.round((correctCount / totalQuestions) * 100);
    }

    const handleResultClick = () => {
        const percentage = getPercentageScore()
        setResult(percentage);
        console.log("percentage", percentage);
    }

    const showQuestions = isLoading && !error;

    return (
        <main className='grow shrink basis-auto flex flex-col text-center'>
            <Helmet>
                <title>Tests</title>
            </Helmet>

            <AddButton />

            {showQuestions
                ? <Loader />
                : <QuestionList getScore={getPercentageScore} />}

            <button type="submit"
                onClick={handleResultClick}
                className='max-w-[680px] w-full mx-auto mb-6 px-[14px] py-[12px] rounded-lg shadow-button font-medium uppercase sm:text-s text-secondary bg-background
                transition duration-300 ease-in-out hover:bg-accent focus:bg-accent hover:text-primary focus:text-primary'>
                Result
            </button> 

            {result && <p className='mb-6'>Правильних відповідей: {result}%</p>}
        </main>
    );
}