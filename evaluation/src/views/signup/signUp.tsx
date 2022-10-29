import './signUp.css';
import Logo from '../../components/logo/logo';
import SignUpForm from '../../components/signupForm/signUpForm';

function SignUp () {
    return <div className='container'>
        <div className='container-box'>
            <Logo />
            <SignUpForm />

        </div>

    </div>
} 

export default SignUp;