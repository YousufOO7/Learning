import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { FaGoogle } from 'react-icons/fa';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = props => {
    const { signIn, setUser, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const [email, setEmail] = useState("");
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');
        // signIn user
        signIn(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                toast.info(`Welcome ${user?.displayName}`)
                navigate(location?.state ? location.state : '/')
            })
            .catch((err) => {
                toast.error('Something was wrong make sure your info in right or not');

            });
    }
    const handleWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : '/')
                toast.success("Google Login successfully  done!")
            })
            .catch(error => {
                toast.error('Something was wrong make sure your info in right or not')
            })
    }

    const handleForgotPassword = () => {
        navigate('/auth/forget-password', { state: { email } });
    };

    return (
        <div className='min-h-screen justify-center items-center flex flex-col'>
            <div className="card bg-base-100 w-full max-w-md shrink-0 p-10">
                <h2 className='font-semibold text-center text-2xl'>Login your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name='password'
                            placeholder="password"
                            className="input input-bordered" required />

                        <button
                            onClick={() => setShowPassword(!showPassword)}
                            className="btn btn-xs absolute right-4 top-12">
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </button>
                        {
                            error.login && <label className="label text-red-500 text-xs">
                                {error.login}
                            </label>
                        }
                        <label className="label">
                            <a
                                onClick={handleForgotPassword}
                                href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className='text-center'>Dont’t Have An Account ? <Link to="/auth/register" className='text-red-500'>Register</Link></p>
            </div>
            <div className='my-3'>
                <button onClick={handleWithGoogle} className='btn btn-primary w-[450px]'><FaGoogle></FaGoogle> Login With Google</button>
            </div>
        </div>
    );
};

Login.propTypes = {

};

export default Login;