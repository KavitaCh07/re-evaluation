import './header.css'
import pass_logo from '../../assets/images/pass_logo.png';
import sync from '../../assets/icons/sync.png';
import profile from '../../assets/icons/profile.png'
import Dropdown from '../dropdown/dropdown';
import { useState } from 'react';

const Header = (props: any) => {
    const [dropdown, setDropdown] = useState(false);
    return <div className='header'>
        <div className='pass-logo'>
            <img src={pass_logo} alt="" />
        </div>
        <div className='header-left-icon'>
            <div className=''>
                <img src={sync} alt="" />
            </div>

            <div className="drop-down-btn">
                <img src={profile} alt="" onClick={() => { setDropdown(true); }} />
                {dropdown && <Dropdown />}
            </div>

        </div>
    </div>
}

export default Header;