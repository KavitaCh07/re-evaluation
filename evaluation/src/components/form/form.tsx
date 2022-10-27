import './form.css';
import eye_on from '../../assets/icons/eye_on.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'


const Form = () => {
    return <>
        <div className='form-container'>
            <div className='form-inner-container'>
                <form action="">
                    <div className='sign-in-to-your-acco'>SIGN IN TO YOUR ACCOUNT</div>
                    
                    <div className='input-field'>
                        <input type="tel" name="" id="" placeholder='Mobile Number' />
                        <input type="text" name="" id="inputfield-2" placeholder='MPin' />
                        <FontAwesomeIcon icon={faEye} />
                        
                        {/* <img src={eye_on} className="eye_on" alt="" /> */}
                    </div>
                    

                        <div className='forgot-password'>Forgot your password?</div>

                        <button className='btn' type="submit"><span className='sign-in'>SIGN IN</span></button>
                        <div className='dont-have-a-account'>Don’t have a Account? SIGNUP</div>
                    
                </form>

            </div>

        </div>
    </>
}

export default Form;