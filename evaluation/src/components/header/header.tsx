import './header.css'
import pass_logo from '../../assets/images/pass_logo.png';
import sync from '../../assets/icons/sync.png';
import profile from '../../assets/icons/profile.png'

const Header = () => {
    return <div className='header'>
        <div>
            <img src={pass_logo} alt="" />
        </div>
        <div>
            <img src={sync} alt="" />
            <img src={sync} alt="" />
        </div>
    </div>
}

export default Header;