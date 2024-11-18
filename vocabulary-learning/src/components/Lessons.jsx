import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Lessons = ({ lessons }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                lessons.map((lesson, idx) => <NavLink
                    key={idx}
                    to={`/lessons/${lesson.lesson_no}`}
                >
                    <div className="card card-compact bg-base-100 shadow-xl h-[100px] border-2 border-blue-500">
                        <div className="card-body">
                            <h2 className="card-title">Lesson {lesson.lesson_no}</h2>
                        </div>
                    </div>
                </NavLink>)
            }
        </div>
    );
};

Lessons.propTypes = {

};

export default Lessons;