import './signUp.css';
import React from 'react'
import Logo from '../../components/logo/logo';
import SignupForm from '../../components/signupForm/signupForm';

function SignUp(){
  return (
    <>
        <div className='container'>
        <div className='container-box'>
            <Logo />
            {/* <Form /> */}
            <SignupForm />

        </div>

    </div>
    </>
  )
}

export default SignUp