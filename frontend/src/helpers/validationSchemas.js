import * as yup from 'yup';

export const basicSchema = yup.object().shape({
    title: yup
        .string()
        .min(2, 'Too Short!')
        .trim()
        .optional(),
    description: yup
        .string()
        .min(6, 'Too Short!')
        .trim()
        .required('Question is required'),
    optionA: yup
        .string()
        .trim()
        .required('Option A is required'),
    optionB: yup
        .string()
        .trim()
        .required('Option B is required'),
    optionC: yup
        .string()
        .trim()
        .optional(),
    optionD: yup
        .string()
        .trim()
        .optional(),
    answer: yup
        .string()
        .trim()
        .required('Answer is required'),
});