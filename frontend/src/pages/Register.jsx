import { Helmet } from 'react-helmet';
import { RegisterForm } from '../components/RegisterForm';
import { NavLink } from "react-router-dom";

export default function Register() {
    return (
        <main className='pt-8 text-center'>
            <Helmet>
                <title>Registration</title>
                </Helmet>
                
            <RegisterForm />

            <NavLink to="/login"
                className="inline-block text-background border-b hover:text-accent focus:text-accent transition duration-300 ease-in-out">
                Already have an account? Sign in
            </NavLink>
        </main>
    );
}