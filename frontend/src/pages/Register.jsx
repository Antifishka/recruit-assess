import { Helmet } from 'react-helmet';
import { RegisterForm } from '../components/RegisterForm';

export default function Register() {
    return (
        <main className='pt-4'>
            <Helmet>
                <title>Registration</title>
                </Helmet>
                
            <RegisterForm />
        </main>
    );
}