
import { Link, NavLink } from "react-router-dom"
const Navbar = () => {

  const items = [
    { name: "Home", path: "/" },
    { name: "Authors", path: "/authors" },
    { name: "FAQ", path: "/faq" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Contact", path: "/contact" }
  ]

  return (
    <div className="navbar items-center border-b-4 border-blue-800">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <i className="fa-solid fa-bars text-2xl"></i>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
            {items.map((item, index) => (
              <li key={index}>
                <NavLink to={item.path} className="menu-link hover:bg-slate-50 hover:text-black">{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/" className="cursor-pointer text-3xl text-primary font-bold hover:bg-gray-50 hover:text-black">VUDERA</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {items.map((item, index) => (
            <li key={index}>
              <NavLink to={item.path} className="font-bold text-lg hover:bg-slate-50 hover:text-primary">{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to='/login' className="btn bg-gray-200 text-black border-0 px-3 py-1 font-bold cursor-pointer hover:bg-gray-950 hover:text-white w-28">Login</Link>
      </div>
    </div>
  )
}

export default Navbar