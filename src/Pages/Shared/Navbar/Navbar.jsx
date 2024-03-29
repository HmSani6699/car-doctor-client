import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthPrividers';



const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogin = () => {
        logOut()
            .then(() => {
                localStorage.removeItem('car-doctor-token')
            })
            .catch(error => console.log(error))
    }

    const navLink = <>
        <li> <Link to='/'>Home</Link> </li>
        <li> <Link to='/'>About</Link> </li>
        {
            user &&
                <li> <Link to='/checkOut'>My CheckOut</Link> </li>
        }
    </>

    return (
        <div className="navbar bg-base-100 mb-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden pl-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-10 p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <Link to='/'>
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                    <Link className='border-0 btn bg-[#FF3811]' onClick={handleLogin}>Log out</Link>
                    </>
                        :
                        <Link className='border-0 btn bg-[#FF3811]'  to='/login'>Log in</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;