import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const MyProfile = props => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h2 className="text-3xl font-semibold text-center text-primary py-3">Welcome {user?.displayName}</h2>
            <div className='flex justify-center items-center py-5'>
                <div className="card card-compact bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src={user?.photoURL}
                            alt="photo" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Name: {user?.displayName}</h2>
                        <p>Email: {user?.email}</p>
                        <div className="card-actions justify-end">
                            <Link to="/update-profile"><button className="btn btn-primary">Update</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

MyProfile.propTypes = {

};

export default MyProfile;