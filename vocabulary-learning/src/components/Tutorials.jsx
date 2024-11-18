import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Tutorials = props => {
    return (
        <div className='w-10/12 mx-auto my-5 '>
            <h2 className="text-5xl font-bold text-center mb-5 underline text-primary"> Tutorial</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 overflow-hidden">
            <div className="w-[350px] md:w-[600px] overflow-hidden">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/4ehG-7v21NQ?si=sOVHqd99wbH9e5a3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <div className='my-2'>
            <Link to="/start-learning"><button className='btn btn-primary'>Learn Vocabularies</button></Link>
            </div>
            </div>

            <div className="w-[350px] md:w-[600px] overflow-hidden">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/t7-nb1wlnyA?si=oRD7rq5wtzGis7Dg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <div className='my-2'>
            <Link to="/start-learning"><button className='btn btn-primary'>Learn Vocabularies</button></Link>
            </div>            
            </div>

            <div className="w-[350px] md:w-[600px] overflow-hidden">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Dn7fTY0g0nU?si=wqje61p41m2PE0uP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <div className='my-2'>
            <Link to="/start-learning"><button className='btn btn-primary'>Learn Vocabularies</button></Link>
            </div>
            </div>

            <div className="w-[350px] md:w-[600px] overflow-hidden">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/kJQjXAVEWt0?si=6Q-RYPA-2OdlGFaX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <div className='my-2'>
            <Link to="/start-learning"><button className='btn btn-primary'>Learn Vocabularies</button></Link>
            </div>
            </div>

            <div className="w-[350px] md:w-[600px] overflow-hidden">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6_5FnCLLYoA?si=rRL4nJZ3DqmMs7Ga" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <div className='my-2'>
            <Link to="/start-learning"><button className='btn btn-primary'>Learn Vocabularies</button></Link>
            </div>
            </div>

            <div className="w-[350px] md:w-[600px] overflow-hidden">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/hyLl_0d0EBw?si=wWuWN-gdPOJTEAv6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <div className='my-2'>
            <Link to="/start-learning"><button className='btn btn-primary'>Learn Vocabularies</button></Link>
            </div>
            </div>
        </div>
        </div>
    );
};

Tutorials.propTypes = {

};

export default Tutorials;