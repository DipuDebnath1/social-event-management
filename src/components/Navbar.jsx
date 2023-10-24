import { Link, NavLink } from "react-router-dom";
import { Context } from "../authprovder/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
    const {user,logOut} = useContext(Context)
    const handleLogOut = () =>{
        logOut()
        .then()
        .catch()
    }
    // console.log(user)
    return (
        <div>
            <div className="w-11/12 mx-auto navbar bg-base-100">
            <div className="navbar-start w-1/2">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu gap-4 text-lg  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><NavLink to={'/'}>Home </NavLink></li> 
               <li><NavLink to={'/about'}>About </NavLink></li> 
               <li><NavLink to={'/venues'}>Our Venues </NavLink></li> 
               <li><NavLink to={'/contact'}>Contact Us</NavLink></li> 
                </ul>
                </div>
                <Link to={'/'}>
                    <img className="w-32  rounded-full" src={'https://i.ibb.co/0thtR1s/images.png'} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu gap-4 text-lg menu-horizontal px-1">
               <li><NavLink to={'/'}>Home </NavLink></li> 
               <li><NavLink to={'/about'}>About </NavLink></li> 
               <li><NavLink to={'/venues'}>Our Venues </NavLink></li> 
               <li><NavLink to={'/contact'}>Contact Us</NavLink></li> 
                
                </ul>
            </div>
            <div className="navbar-end w-1/2 space-x-3">
                <span>
                    {
                      
                        user ? <div className="hidden md:flex items-center gap-4"> 
                            <h2 className="text-red-500 font-semibold ">{user?.displayName}</h2>
                            <img className="h-12  w-12 rounded-full object-cover" src={user?.photoURL}alt="" />
                        </div> :''
                        // console.log(user) b
                    }
                </span>
                {
                    user ? <button  onClick={handleLogOut} className="btn bg-red-400 hover:bg-red-500 text-white">SignOut</button> :
                    <Link className="btn bg-red-400 hover:bg-red-500 text-white" to={'/login'}>Sign In</Link>

                }
            </div>
            </div>
        </div>
    );
};

export default Navbar;