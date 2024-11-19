import PropTypes from 'prop-types';

const FeedBack = ({ feedBackData }) => {
    return (
        <div>
            <h2 
            className="text-3xl font-bold text-center text-primary mb-3 underline animate__animated animate__bounce animate__infinite	infinite"
            >FeedBack Section</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
           {
            feedBackData.map(feed =>  <div className="card bg-base-100 w-64  border-2 border-blue-500 shadow-xl">
                <div className="card-body">
                    <div className='flex items-center'>
                        <img src={feed.image} className='w-12 h-12 rounded-full mr-4' alt="" />
                    <h2 className="card-title">Name: {feed.person_name}</h2>
                    </div>
                    <p><b>Review:</b> {feed.review}</p>
                </div>
            </div>)
           }
        </div>
        </div>
    );
};

FeedBack.propTypes = {
    props: PropTypes
};

export default FeedBack;