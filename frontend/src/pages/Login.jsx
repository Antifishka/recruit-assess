import { Helmet } from 'react-helmet';
import { LoginForm } from '../components/LoginForm';

export default function Login() {
  return (
    <main className='pt-4'>
      <Helmet>
        <title>Login</title>
          </Helmet>
          
      <LoginForm />
    </main>
  );
}