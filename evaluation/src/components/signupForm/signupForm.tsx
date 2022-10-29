import './signUpForm.css';
import Input from '../formInput/input';
import eye_on from '../../assets/icons/eye_on.png'
import { Link } from 'react-router-dom';

const SignUpForm = () => {
    return <div className='form-container containers '>
        <div className='sign-up'>SIGN UP</div>

        <div>
        <Input type="tel" placeholder="Enter Mobile Number"/>
        </div>

        <div>
        <Input type="tel" placeholder="Enter 4 Digit MPin"/>
        </div>

        <div className='mpin-field mpin'>
            <Input type="" placeholder="MPin"/>
            <img src={eye_on} alt="" className='eye_on-icon' />
        </div>

        <button className='btn' type="submit"> <Link to="/"><span className='sign-in'>SIGN UP</span></Link></button>

    </div>
}

export default SignUpForm;