import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Login = props => {
    return (
        <div className='min-h-screen justify-center items-center flex'>
            <div className="card bg-base-100 w-full max-w-md shrink-0 p-10">
            <h2 className='font-semibold text-center text-2xl'>Login your account</h2>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className='text-center'>Dont’t Have An Account ? <Link to="/auth/register" className='text-red-500'>Register</Link></p>
            </div>
        </div>
    );
};

Login.propTypes = {

};

export default Login;