import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import authOperations from '../redux/auth/auth-operations';
import { FaUserEdit } from 'react-icons/fa';
import { MdEmail, MdLock } from 'react-icons/md';
import { Button } from './Button';

const userSchema = yup.object().shape({
    nickname: yup
        .string()
        .min(2, 'Too Short!')
        .max(30, 'Too Long!')
        .required('Name is required'),
    email: yup
        .string()
        .email('Invalid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(6, 'Too Short!')
        .required('Password is required'),
});

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
        nickname: '',
        email: '',
        password: '',
        },
    validationSchema: userSchema,
    onSubmit: ({ nickname, email, password }, { resetForm }) => {
      console.log(nickname, email, password)
      dispatch(
        authOperations.register({
          nickname,
          email,
          password,
      }));  

      resetForm();
    },
  });

    return (
        <form onSubmit={handleSubmit} autoComplete="off"
            className='form'>
            <h2 className='text-m font-semibold'>Registration</h2>
            <label className='form__label'>
                Username
                <FaUserEdit size={15}
                    className='form__icon'/>
                <input
                    type="text"
                    name="nickname"
                    value={values.nickname}
                    placeholder="Antifishka"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className='form__input'/>
                {errors.nickname && touched.nickname &&
                    <p className='form__error'>{errors.nickname}</p>}
            </label>
            
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

            <Button type="submit">Sign Up</Button>
        </form>
    );
}; 