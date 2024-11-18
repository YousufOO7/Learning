import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const Graf = props => {

    const userInfo = [
        {
            "id": 1,
            "user_name": "Alice",
            "review_rate": 92
        },
        {
            "id": 2,
            "user_name": "Bob",
            "review_rate": 85
        },
        {
            "id": 3,
            "user_name": "Charlie",
            "review_rate": 78
        },
        {
            "id": 4,
            "user_name": "Diana",
            "review_rate": 90
        },
        {
            "id": 5,
            "user_name": "Ethan",
            "review_rate": 67
        },
        {
            "id": 6,
            "user_name": "Fiona",
            "review_rate": 88
        }
    ]
    

    return (
        <div className='hidden md:block'>
            <h2 className="text-3xl font-bold text-center text-primary mb-3 underline">Graf Section</h2>
            

           
            <BarChart  width={580} height={300} data={userInfo}>
                <Bar dataKey={'review_rate'} fill="#8884d8"></Bar>
                <Tooltip wrapperStyle={{ width: 150, backgroundColor: '#ccc' }}></Tooltip>
                <XAxis dataKey={'user_name'}></XAxis>
                <YAxis></YAxis>
            </BarChart>
            
        </div>
    );
};

Graf.propTypes = {
    
};

export default Graf;