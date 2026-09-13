import logo from "../assets/logo.png";
import hamburger from "../assets/hamburger (1).png";
export default function Nav() {
  return (
    <div className=" bg-white text-black shadow-sm sticky top-0 z-20">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <a className="ml-auto md:ml-0 ">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className="-order-1">
          <img className="sm:flex md:hidden" src={hamburger} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-pink-500 font-bold">Home</a>
            </li>
            <li>
              <a>Technologies</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-6">
          <a className="">Sign in</a>
          <a className="btn rounded-full bg-pink-500 border-0">Sign Up</a>
        </div>
      </div>
    </div>
  );
}
