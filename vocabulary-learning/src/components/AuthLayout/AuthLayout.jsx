import PropTypes from 'prop-types';
import Navbar from '../Layouts/Navbar';
import { Outlet } from 'react-router-dom';

const AuthLayout = props => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <div className='bg-[#F3F3F3]'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

AuthLayout.propTypes = {
    
};

export default AuthLayout;