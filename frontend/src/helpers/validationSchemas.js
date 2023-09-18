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
        .test('is-not-same-as-other-options', 'Option B must be different from other options', function (value) {
            const { optionA, optionC, optionD } = this.parent;
            return value !== optionA && value !== optionC && value !== optionD;
        })
        .required('Option B is required'),
    optionC: yup
        .string()
        .trim()
        .test('is-not-same-as-other-options', 'Option C must be different from other options', function (value) {
            const { optionA, optionB, optionD } = this.parent;
            return !value ? true : value !== optionA && value !== optionB && value !== optionD;
        })
        .optional(),
    optionD: yup
        .string()
        .trim()
        .test('is-not-same-as-other-options', 'Option D must be different from other options', function (value) {
            const { optionA, optionB, optionC } = this.parent;
            return !value ? true : value !== optionA && value !== optionB && value !== optionC;
        })
        .optional(),
    answer: yup
        .string()
        .trim()
        .test('is-valid-answer', 'Answer must match one of the options', function (value) {
            const { optionA, optionB, optionC, optionD } = this.parent;
            return [optionA, optionB, optionC, optionD].includes(value);
        })
        .required('Answer is required'),
});