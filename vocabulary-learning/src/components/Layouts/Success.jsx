import PropTypes from 'prop-types';
import CountUp from 'react-countup';
const Success = props => {
    return (
        <div>
            <h2 className="text-3xl font-semibold text-center underline text-primary">Success</h2>
            <div className='py-2'>
                <div className="stats shadow stats-vertical lg:stats-horizontal">
                    <div className="stat place-items-center">
                        <div className="stat-title">Lesson</div>
                        <div className="stat-value"><CountUp end={500} duration={5}></CountUp></div>
                        <div className="stat-desc">From January 1st to February 1st</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Users</div>
                        <div className="stat-value text-secondary"><CountUp end={4200} duration={5}></CountUp></div>
                        <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Tutorial </div>
                        <div className="stat-value"><CountUp end={300} duration={5}></CountUp></div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

Success.propTypes = {
    props: PropTypes
};

export default Success;