import PropTypes from 'prop-types';
import Header from '../Layouts/Header';
import Navbar from '../Layouts/Navbar';

const Main = props => {
    return (
        <div>
            <header className='flex justify-center items-center text-center py-3'>
                <Header></Header>
            </header>
            <nav className='w-10/12 mx-auto py-3'>
                <Navbar></Navbar>
            </nav>
            <main>

            </main>
        </div>
    );
};

Main.propTypes = {
    props: PropTypes
};

export default Main;