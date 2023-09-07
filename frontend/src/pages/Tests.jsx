import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { selectIsLoading, selectError } from '../redux/questions/questions-selectors';
import { fetchQuestions } from '../redux/questions/questions-operations';
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
        <div>
            <Helmet>
                <title>Tests</title>
            </Helmet>

            {showContacs ? <Loader /> : <QuestionList />}
        </div>
    );
}