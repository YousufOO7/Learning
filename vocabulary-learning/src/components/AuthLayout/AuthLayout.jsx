import PropTypes from 'prop-types';
import Navbar from '../Layouts/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Layouts/Footer';

const AuthLayout = props => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <div className='bg-[#F3F3F3] min-h-[calc(100vh-288px)]'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

AuthLayout.propTypes = {
    
};

export default AuthLayout;