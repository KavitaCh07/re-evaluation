import './form.css';
import { useState } from 'react';
import eye_on from '../../assets/icons/eye_on.png';
// import { Icon } from 'react-icons-kit';
// import { eye } from 'react-icons-kit/feather/eye';
// import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { Link } from 'react-router-dom';
import Input from '../formInput/input';


const Form = () => {
    const [password, setPassword] = useState(false);
    const togglePassword = () => {
        setPassword(!password);
    };
    // const [type, setType] = useState('password');
    // const [icon, setIcon] = useState('eyeOff');

    // const handleToggle = () => {
    //     if (type === 'password') {
    //         setIcon(eye);
    //         setType('text');
    //     }
    //     else {
    //         setIcon(eyeOff);
    //         setType('password');
    //     }
    // }
    return (
        <div className='form-container'>
            <div className='form-inner-container'>

                <form action="">
                    <div className='sign-in-to-your-acco'>SIGN IN TO YOUR ACCOUNT</div>
                    <input type="tel" name="" id="" placeholder='Mobile Number' />

                    <div className='input-field'>
                        <input type={password ? "text" : "password"} name="" id="inputfield-2" placeholder='MPin' />
                        {/* <span  className='input-icon'><Icon icon={icon} /> </span> */}
                        {/* <FontAwesomeIcon icon={} /> */}
                        <img src={eye_on} className='input-icon' onClick={togglePassword} alt="" />
                    </div>
                    

                    <div className='forgot-password'>Forgot your password?</div>
                    <button className='btn' type="submit"><span className='sign-in'>SIGN IN</span></button>
                    <div className='dont-have-a-account'>Don’t have a Account? <Link to="/signUp">SIGNUP</Link></div>
                </form>

            </div>
            
        </div>
        
    )
}

export default Form;