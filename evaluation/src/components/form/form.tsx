import './form.css';
import Input from '../formInput/input';
import eye_on from '../../assets/icons/eye_on.png';
import { Link } from 'react-router-dom';

const Form = () => {

    return <div className='form-container'>
        <div className='sign-in-to-your-acco'>SIGN IN TO YOUR ACCOUNT</div>
        <div>
            <Input type="tel" placeholder="Mobile Number"/>
        </div>

        <div className='mpin-field'>
            <Input type="" placeholder="MPin"/>
            <img src={eye_on} alt="" className='eye_on-icon' />
        </div>

        <div className='forgot-your-password'>Forgot your password?</div>

        <button className='btn' type="submit"><Link to="/dasboard"><span className='sign-in'>SIGN IN</span></Link></button>

        <div className='dont-have-a-account'>Don’t have a Account? <Link to="/signup">SIGNUP</Link></div>

    </div>

}
export default Form;