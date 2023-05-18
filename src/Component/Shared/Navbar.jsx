import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-zinc-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       
        <li><Link to="/" className="font-bold text-lg">Home</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">
        <img className="w-[95px]" src="https://cdn.shopify.com/s/files/1/0553/2178/8461/files/logo.png?v=1636766158" alt="dog" />
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
    
      <li><Link to="/" className="font-bold text-lg">Home</Link></li>
    </ul>
  </div>
  <div className="navbar-end">

    <a className="btn btn-outline">Login</a>
  </div>
</div>
    );
};

export default Navbar;