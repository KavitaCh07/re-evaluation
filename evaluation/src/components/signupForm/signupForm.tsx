import './signupForm.css';
import React from 'react'
import { useState } from 'react';
import eye_on from '../../assets/icons/eye_on.png';
// import { Icon } from 'react-icons-kit';
// import { eye } from 'react-icons-kit/feather/eye';
// import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { Link } from 'react-router-dom';

const SignupForm = () => {
    const [password, setPassword] = useState(false);
    const togglePassword = () => {
        setPassword(!password);
    };
  return (
    
    <div className='form-container'>
    <div className='form-inner'>
        <form action="">
            <div className='sign-up'>SIGN UP</div>
            <input type="tel" name="" id="" />
           
        </form>
    </div>
</div>
  )
}

export default SignupForm;