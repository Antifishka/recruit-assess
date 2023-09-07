import { useSelector } from "react-redux";
import { selectQuestions } from "../redux/questions/questions-selectors";

export const QuestionList = () => {
    const questions = useSelector(selectQuestions);
    console.log("questions", questions);

    return (
        <>
            <ul> 
                {questions?.map(({ id, title, description }) =>
                    <li key={id}>
                        <div>{title}</div>
                        <div>{description}</div>
                    </li>)
                }
            </ul>

            <div>Total questions: {questions?.length}</div>
        </>
    )        
};