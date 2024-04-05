import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
 <div className="navbar bg-base-100 max-w-screen-lg w-full mx-auto mb-16" >
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
        <Link  to="/" className='btn'>NATION-F</Link>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
        <Link to="/create">ADD NEW RETSEPT</Link>
        </li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="/contact" className="btn">Contact</Link>
  </div>
</div>
    )
}
