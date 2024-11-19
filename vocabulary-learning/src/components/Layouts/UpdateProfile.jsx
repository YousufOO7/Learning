import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';

const UpdateProfile = props => {
    const {updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const photo = form.get('photo');
        console.log(name, photo)

        updateUserProfile({displayName: name, photoURL: photo})
        .then(() => {
            toast.success('successfully update')
            navigate('/my-profile')
        })
        .catch(error => {
            toast.error("Something was wrong make sure your info in right or not")
        })
    }
    

    return (
       <div className='my-5 justify-center items-center flex'>
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
         <h2 className='font-semibold text-center text-2xl'>Update Your Profile</h2>
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="name" name='name' placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">PhotoURL</span>
                    </label>
                    <input type="photo" name='photo' placeholder="photo url" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
       </div>
    );
};

UpdateProfile.propTypes = {

};

export default UpdateProfile;