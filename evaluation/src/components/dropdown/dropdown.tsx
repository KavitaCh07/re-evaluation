import './dropdown.css';
import { Link } from 'react-router-dom';

const Dropdown = () => {
    return(
        <div className='dropdown'>
            <div className="drop-down-content">
            <div className="dropdown-item">Change Password</div>
            <div className="dropdown-item"> <Link to="/">Sign Out</Link></div>

            </div>
        </div>

    );
}

export default Dropdown;