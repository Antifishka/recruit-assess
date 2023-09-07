import { useSelector } from "react-redux";
import { selectQuestions } from "../redux/questions/questions-selectors";
import { QuestionItem } from "./QuestionItem";

export const QuestionList = () => {
    const questions = useSelector(selectQuestions);
    console.log("questions", questions);

    return (
        <>
            <ul className="flex flex-col items-center gap-9"> 
                {questions?.map(({ _id, title, description, options, answer }) =>
                    <QuestionItem
                        key={_id}
                        title={title}
                        description={description}
                        options={options}
                        answer={answer} />       
                )}
            </ul>

            <div>Total questions: {questions?.length}</div>
        </>
    )        
};