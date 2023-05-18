import { Link } from "react-router-dom";

import mainLogo from "../../assets/logo.avif"
import { useContext } from "react";
import { authContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, createLogOut } = useContext(authContext);
  const handleLogOut = () => {
    createLogOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
    return (
        <div className="navbar bg-zinc-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       
        <li><Link to="/" className="font-bold text-lg">Home</Link></li>
        <li><Link to="/blog" className="font-bold text-lg">Blog</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">
        <img className="w-[100px]" src={mainLogo} alt="dog" />
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
    
      <li><Link to="/" className="font-bold text-lg">Home</Link></li>
      <li><Link to="/blog" className="font-bold text-lg">Blog</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
        {user ? (
          <div className="flex">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} title={user?.displayName} />
              </div>
            </label>
            <button onClick={handleLogOut} className="btn btn-outline">
              Log out
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn btn-outline font-bold ">
            login
          </Link>
        )}
      </div>
</div>
    );
};

export default Navbar;