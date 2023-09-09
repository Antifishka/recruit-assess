import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addQuestion } from "../redux/questions/questions-operations";
import { selectQuestions } from "../redux/questions/questions-selectors";
import toast from 'react-hot-toast';
import { Button } from './Button';
import { useFormik } from 'formik';
// import { basicSchema } from 'helpers/validationSchemas';
import PropTypes from 'prop-types';
 
const QuestionEditor = ({ onAdd }) => {
    const questions = useSelector(selectQuestions);
    const dispatch = useDispatch();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } = useFormik({
        initialValues: {
            title: '',
            description: '',
            optionA: '',
            optionB: '',
            optionC: '',
            optionD: '',
            answer: '',
        },
        // validationSchema: basicSchema,
        onSubmit: ({
            title,
            description,
            optionA,
            optionB,
            optionC,
            optionD,
            answer,
        }, { resetForm }) => {
            console.log(title, description, optionA, optionB, optionC, optionD, answer);
            const question = {
                title,
                description,
                options: [optionA, optionB, optionC, optionD],
                answer,
            };

            dispatch(addQuestion(question));
            toast.success('Question added!');

            onAdd();

            resetForm();
        },
    });

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-center">
            <strong className='text-m font-semibold'>Create new question</strong>
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
                <input
                    type="text"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form__input pl-2" />
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
            
            <Button type="submit">Add question</Button>        
        </form> 
    );
};
    
export default QuestionEditor;

QuestionEditor.propsType = {
  onAdd: PropTypes.func.isRequired,
};