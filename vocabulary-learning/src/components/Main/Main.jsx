import PropTypes from 'prop-types';
import Header from '../Layouts/Header';
import Navbar from '../Layouts/Navbar';
import Footer from '../Layouts/Footer';
import Banner from '../Layouts/Banner';
import About from '../Layouts/About';
import Success from '../Layouts/Success';

const Main = props => {
    return (
        <div>
            {/* <header className='flex justify-center items-center text-center py-3'>
                <Header></Header>
            </header> */}
            <nav className='w-10/12 mx-auto py-3'>
                <Navbar></Navbar>
            </nav>
            <Banner></Banner>
            <main>
                <section className='grid md:grid-cols-2 gap-6 w-10/12 mx-auto py-3'>
                    <div >
                        <About></About>
                    </div>
                    <div >
                        <Success></Success>
                    </div>
                </section>
            </main>
            <footer>
                <Footer></Footer>

            </footer>
        </div>
    );
};

Main.propTypes = {
    props: PropTypes
};

export default Main;