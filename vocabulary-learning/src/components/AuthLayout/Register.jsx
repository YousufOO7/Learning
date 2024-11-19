import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Register = props => {
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const location = useLocation();
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password')
        setError('');

        if (password.length < 6) {
            setError({ ...error, password: "Password length must be at least 6 character" })
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError({ ...error, password: "Password must have Lowercase letter" })
            return;

        }
        if (!/[A-Z]/.test(password)) {
            setError({ ...error, password: "Password must have Uppercase letter" })
            return;
        }

        // create user
        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate(location?.state ? location.state : '/')
                        toast.success('Register successfully  done!')
                    })
                    .catch(error => {
                        toast.error('Something was wrong make sure your info in right or not')
                    })
            })
            .catch((error) => {
                toast.error('Something was wrong make sure your info in right or not')
            });
    }


    return (
        <div className='min-h-screen justify-center items-center flex py-10'>
            <div className="card bg-base-100 w-full max-w-md shrink-0 p-10">
                <h2 className='font-semibold text-center text-2xl'>Register your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="photo" name='photo' placeholder="photo url" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name='password'
                            placeholder="password"
                            className="input input-bordered"
                            required />

                        <button
                            onClick={() => setShowPassword(!showPassword)}
                            className="btn btn-xs absolute right-4 top-12">
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </button>
                    </div>
                    {
                        error.password &&
                        <label className="label text-red-600 text-xs">
                            {error.password}
                        </label>
                    }
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className='text-center'>Already Have An Account ? <Link to="/auth/login" className='text-red-500'>Login</Link></p>
            </div>

        </div>
    );
};

Register.propTypes = {

};

export default Register;