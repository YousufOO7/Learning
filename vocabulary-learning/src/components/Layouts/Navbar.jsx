import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Navbar = props => {

    const Links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/start-learning">Start Learning</NavLink></li>
        <li><NavLink to="/tutorials">Tutorials</NavLink></li>
        <li><NavLink to="/about-us">About Us</NavLink></li>
    </>

    return (
        <div className="navbar bg-gray-800 text-gray-200">
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
            <div className="navbar-end">
                <a className="btn">Login</a>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    props: PropTypes
};

export default Navbar;