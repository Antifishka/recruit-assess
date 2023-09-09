import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectQuestions } from '../redux/questions/questions-selectors';
import { updateQuestion } from "../redux/questions/questions-operations";
import toast from 'react-hot-toast';
import { Button } from './Button';
import { useFormik } from 'formik';
import { basicSchema } from '../helpers/validationSchemas';
import PropTypes from 'prop-types';
 
const QuestionEditorUpdate = ({ onUpdate, id }) => {
    const questions = useSelector(selectQuestions);
    const dispatch = useDispatch();
    console.log("questions", questions);
    const questionById = questions.filter(q => q._id === id);
    console.log("questionById", questionById);

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            title: questionById[0].title || '',
            description: questionById[0].description,
            optionA: questionById[0].options[0],
            optionB: questionById[0].options[1],
            optionC: questionById[0].options[2] || '',
            optionD: questionById[0].options[3] || '',
            answer: questionById[0].answer,
        },
        validationSchema: basicSchema,
        onSubmit: ({
            title,
            description,
            optionA,
            optionB,
            optionC,
            optionD,
            answer,
        }, { resetForm }) => {
            const options = [optionA, optionB];

            if (optionC) {
                options.push(optionC);
            }
            if (optionD) {
                options.push(optionD);
            }

            const question = {
                title,
                description,
                options,
                answer,
                id,
            };

            dispatch(updateQuestion(question));
            toast.success('Question updated');

            onUpdate();

            resetForm();
        },
    });

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-center">
            <strong className='text-m font-semibold'>Enter your changes</strong>
            <label className="form__label">Title
                <input
                    type="text"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Node.js"
                    className="form__input pl-2"/> 
                {errors.title && touched.title &&
                    <p className='form__error'>{errors.title}</p>}
            </label>

            <label className="form__label">Question
                <textarea
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter question..."
                    className="form__input pl-2 resize-none" />
                {errors.description && touched.description &&
                    <p className='form__error'>{errors.description}</p>}
            </label>

            <label className="form__label">Option A
                <input
                    type="text"
                    name="optionA"
                    value={values.optionA}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form__input pl-2" />
                {errors.optionA && touched.optionA &&
                    <p className='form__error'>{errors.optionA}</p>}
            </label>

            <label className="form__label">Option B
                <input
                    type="text"
                    name="optionB"
                    value={values.optionB}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form__input pl-2" />
                {errors.optionB && touched.optionB &&
                    <p className='form__error'>{errors.optionB}</p>}
            </label>

            <label className="form__label">Option C
                <input
                    type="text"
                    name="optionC"
                    value={values.optionC}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form__input pl-2" />
                {errors.optionC && touched.optionC &&
                    <p className='form__error'>{errors.optionC}</p>}
            </label>

            <label className="form__label">Option D
                <input
                    type="text"
                    name="optionD"
                    value={values.optionD}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form__input pl-2" />
                {errors.optionD && touched.optionD &&
                    <p className='form__error'>{errors.optionD}</p>}
            </label>

            <label className="form__label">Correct answer
                <input
                    type="text"
                    name="answer"
                    value={values.answer}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form__input pl-2" />
                {errors.answer && touched.answer &&
                    <p className='form__error'>{errors.answer}</p>}
            </label>
            
            <Button type="submit">Edit question</Button>        
        </form> 
    );
};
    
export default QuestionEditorUpdate;

QuestionEditorUpdate.propsType = {
    id: PropTypes.string.isRequired,
    onUpdate: PropTypes.func.isRequired,
}