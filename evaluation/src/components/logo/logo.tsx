import './logo.css';
import logo from '../../assets/images/logo.png';

const Logo = () => {
    return (
        <div className='logo-container'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>

            <div className='protect-manage-eve'>Protect & Manage every
                password in your business</div>
        </div>
    )
}
export default Logo;