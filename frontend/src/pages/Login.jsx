import { Helmet } from 'react-helmet';
import { LoginForm } from '../components/LoginForm';
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <main className='pt-8 text-center'>
      <Helmet>
        <title>Login</title>
          </Helmet>
          
      <LoginForm />

      <NavLink to="/register"
        className="inline-block text-background border-b hover:text-accent focus:text-accent transition duration-300 ease-in-out">
        Don&apos;t have an account? Sign up
      </NavLink>
    </main>
  );
}