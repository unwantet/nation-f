import { Link } from 'react-router-dom'
import { LuSunMoon } from "react-icons/lu";
import { IoMoonSharp } from "react-icons/io5";
import { useEffect , useState } from 'react'; 

const themes = {
  nord: 'nord',
  dracula: 'dracula',
}

function darkModeFromLocalStorage(){
  return localStorage.getItem('mode') || themes.nord
}


export default function Navbar() {
  const [theme, setTheme] = useState(darkModeFromLocalStorage())

  const handleClick = () => {
    const newTheme = theme === themes.nord ? themes.dracula : themes.nord
    setTheme(newTheme)
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('mode', theme)
  }, [theme])


    return (
 <div className="navbar bg-base-100 max-w-screen-lg w-full mx-auto mb-16" >
  <div className="navbar-start">
        <Link  to="/" className='btn'>NATION-F</Link>
  </div>
  <div className="navbar-center hidden lg:flex flex-nowrap">
    <ul className="menu menu-horizontal px-1">
      <li>
        <Link to="/create">ADD NEW RETSEPT</Link>
        </li>
    </ul>
  </div>
  <div className="navbar-end flex gap-5 items-center">
  <label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" 
  className="theme-controller"
   value="synthwave"
   onClick={handleClick} 
   defaultChecked={
    theme == themes.dracula ? true : false
   }
   />
  
  {/* sun icon */}
  <LuSunMoon className="swap-on fill-current w-8 h-8" />
  
  {/* moon icon */}
  <IoMoonSharp className="swap-off fill-current w-8 h-8" />
  
</label>

    <Link to="/contact" className="btn">Contact</Link>
  </div>
</div>
    )
}
