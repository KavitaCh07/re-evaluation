import './dashboard.css';
import Sidebar from '../../components/sidebar/sidebar';
import Header from '../../components/header/header';

function Dashboard () {
    return <div className='dashboard'>
        <Sidebar />
        <Header />

    </div>
}

export default Dashboard;