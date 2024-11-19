import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = props => {

    const {user, Logout} = useContext(AuthContext);

    const Links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/start-learning">Start Learning</NavLink></li>
        <li><NavLink to="/tutorials">Tutorials</NavLink></li>
        <li><NavLink to="/about-us">About Us</NavLink></li>
        {
            user && user?.email ? <li><NavLink to="/my-profile">My Profile</NavLink></li> : ''
        }
    </>

    return (
        <div className="navbar bg-gray-800 text-gray-200 px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            Links
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Lingo Bingo </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {
                    Links
                   }
                </ul>
            </div>
            <div className="navbar-end space-x-5">
                {
                    user && user?.email ? <div className='flex items-center gap-2'>
                        <p>{user?.displayName}</p>
                        <img className='h-[40px] rounded-full hidden md:block'  src={user?.photoURL} alt="image" />
                    </div> : ''
                }
                {
                    user && user?.email ? <Link to="/"><button onClick={Logout} className="btn btn-neutral">Log-Out</button></Link> : <Link to="/auth/login"><a className="btn">Login</a></Link>
                    
                }
            </div>
        </div>
    );
};

Navbar.propTypes = {
    props: PropTypes
};

export default Navbar;