import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { selectIsLoading, selectError } from '../redux/questions/questions-selectors';
import { fetchQuestions } from '../redux/questions/questions-operations';
import { AddButton } from "../components/AddButton";
import { Loader } from '../components/Loader';
import { QuestionList } from '../components/QuestionList';
import toast from 'react-hot-toast';

export default function Tests() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchQuestions());
        error && toast.error('No response from server!');
    }, [dispatch, error]);

    const showContacs = isLoading && !error;

    return (
        <main className='text-center'>
            <Helmet>
                <title>Tests</title>
            </Helmet>

            <AddButton />

            {showContacs ? <Loader /> : <QuestionList />}

            <button type="submit"
                className='inline-block max-w-[680px] w-full mx-auto mb-6 px-[14px] py-[12px] rounded-lg shadow-button font-medium uppercase sm:text-s text-secondary bg-background
                    transition duration-300 ease-in-out hover:bg-accent focus:bg-accent hover:text-primary focus:text-primary'>
                Result
            </button>
        </main>
    );
}