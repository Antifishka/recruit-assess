import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import authOperations from '../redux/auth/auth-operations';
import { MdEmail, MdLock } from 'react-icons/md';
import { Button } from './Button';

const userSchema = yup.object().shape({
    email: yup
      .string()
      .email('Invalid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(6, 'Too Short!')
      .required('Password is required'),
});

export const LoginForm = () => {
    const dispatch = useDispatch();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
        email: '',
        password: '',
        },
        validationSchema: userSchema,
        onSubmit: ({ email, password }, { resetForm }) => {
        dispatch(
            authOperations.logIn({
            email,
            password,
        }));  

        resetForm();
        },
    });

    return (
        <form onSubmit={handleSubmit} autoComplete="off"
            className='form'>
            <h2 className='text-m font-semibold'>Login</h2>
            <label className='form__label'>
                Email
                <MdEmail size={15}
                    className='form__icon' />
                <input
                    type="email"
                    name="email"
                    value={values.email}
                    placeholder="example@mail.com"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className='form__input' />
                {errors.email && touched.email &&
                    <p className='form__error'>{errors.email}</p>}
            </label>

            <label className='form__label'>
                Password
                <MdLock size={15}
                className='form__icon' />
                <input
                    type="password"
                    name="password"
                    value={values.password}
                    placeholder="Example123"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className='form__input' />
                {errors.password && touched.password &&
                    <p className='form__error'>{errors.password}</p>}
            </label>

            <Button type="submit">Sign In</Button>
        </form>
    );
};