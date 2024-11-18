import PropTypes from 'prop-types';
import Banner from '../Layouts/Banner';
import About from '../Layouts/About';
import Success from '../Layouts/Success';
import LessonsPage from '../Layouts/LessonsPage';
import FeedBack from '../Layouts/FeedBack';

const Home = props => {
    return (
        <div>
            <Banner></Banner>
            <section className='grid lg:grid-cols-2 gap-6 w-10/12 mx-auto py-3'>
                    <div >
                        <About></About>
                    </div>
                    <div >
                        <Success></Success>
                    </div>
                    
                </section>
            <LessonsPage></LessonsPage>
        </div>
    );
};

Home.propTypes = {
    props: PropTypes
};

export default Home;