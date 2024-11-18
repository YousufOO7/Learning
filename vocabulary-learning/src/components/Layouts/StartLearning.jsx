import PropTypes from 'prop-types';
import Lessons from '../Lessons';
import { useLoaderData } from 'react-router-dom';

const StartLearning = props => {
    const lessons = useLoaderData();
    return (
        <div>
            {/* Page Title */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-primary"> A Vocabulary Learning Application
                </h1>
                <p className="text-gray-600 mt-2">Start with these engaging lessons and tutorials!</p>
            </div>
            <div className="overflow-hidden  w-10/12 mx-auto my-5">
                <Lessons
                    lessons={lessons}
                ></Lessons>
            </div>
        </div>
    );
};

StartLearning.propTypes = {

};

export default StartLearning;