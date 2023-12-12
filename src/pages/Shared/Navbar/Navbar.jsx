import { Link, NavLink } from "react-router-dom";
import linkedinImg from "../../../assets/linkedin.png"

const Navbar = () => {
  const navOptions = (
    <>
      <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active bg-green-800 text-white font-semibold px-4 py-2 rounded" : "px-4 py-2 bg-gradient-to-r from-[#00f298] to-[#07f7f7] bg-clip-text text-transparent font-bold"}>Home</NavLink>
      <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active bg-green-800 text-white font-semibold px-4 py-2 rounded" : "px-4 py-2 bg-gradient-to-r from-[#00f298] to-[#07f7f7] bg-clip-text text-transparent font-bold"}>Contact Me</NavLink>
      <NavLink to="/projects" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active bg-green-800 text-white font-semibold px-4 py-2 rounded" : "px-4 py-2 bg-gradient-to-r from-[#00f298] to-[#07f7f7] bg-clip-text text-transparent font-bold"}>Projects</NavLink>
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-50 bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
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
                  d="M4 6h16M4 12h8m-8 6h16"/>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl bg-gradient-to-r from-[#00f298] to-[#07f7f7] bg-clip-text text-transparent">PortFolio</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
        </ul>
        </div>
        <div className="navbar-end pr-7">
          <Link to='https://www.linkedin.com/in/rana0709'
          target="_blank"
          rel="noopener noreferrer">
            <img className="w-24" src={linkedinImg}/>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
