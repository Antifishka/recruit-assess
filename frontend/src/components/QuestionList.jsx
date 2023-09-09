import { useSelector } from "react-redux";
import { selectQuestions } from "../redux/questions/questions-selectors";
import { QuestionItem } from "./QuestionItem";

export const QuestionList = () => {
    const questions = useSelector(selectQuestions);

    return (
        <ul className="grow shrink basis-auto flex flex-col items-center gap-9 mb-6"> 
            {questions?.map(({ _id: id, title, description, options, answer }) =>
                <QuestionItem
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    options={options}
                    answer={answer} />)}
        </ul>
    )        
};