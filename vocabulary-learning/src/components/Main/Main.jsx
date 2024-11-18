import PropTypes from 'prop-types';
import Navbar from '../Layouts/Navbar';
import Footer from '../Layouts/Footer';
import { Outlet } from 'react-router-dom';

const Main = props => {
    return (
        <div>
            <div ><Navbar></Navbar></div>
            <div className=' min-h-[calc(100vh-288px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

Main.propTypes = {
    props: PropTypes
};

export default Main;