import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min"
import { UserContext } from "../context/user"
import { useContext } from "react"
import NavBarLogOut from "./NavBarLogOut"

function NavBar() {
    const { user } = useContext(UserContext)


    return(
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark p-0">
            <Link to='/' className="navbar-brand m-0">
                <img id='logo-navbar' src='../assets/thenextbigthing-high-resolution-logo-color-on-transparent-background-cropped-icon.png' alt='logo' className='ms-4 m-0' height='50'/>
            </Link>
            <div className="ms-4 ps-0 container-fluid">
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Nav Bar Links */}
                <div className="collapse navbar-collapse justify-content-start align-center" id="navbarSupportedContent">
                    <ul className='navbar-nav'>
                        <li className='nav-item fs-5'>
                            <NavLink to='/' exact={true} className='nav-link'>Home</NavLink>
                        </li>
                        <li className='nav-item fs-5'>
                            <NavLink to='/shop' className='nav-link'>Shop</NavLink>
                        </li>
                        <li className='nav-item fs-5'>
                            <NavLink to='/about' className='nav-link'>About</NavLink>
                        </li>
                        <li className='nav-item fs-5'>
                            <NavLink to='/reviews' className='nav-link'>Early Reviews</NavLink>
                        </li>
                        {user ? 
                        user.admin ? 
                        <li className='nav-item fs-5'>
                            <NavLink to='/admin' className='nav-link'>Admin Page</NavLink>
                        </li>
                        :null
                        :null
                        }
                    </ul>
                </div>    
            </div>
            <div className='float-end'>
                    {user ? <NavBarLogOut /> : <Link to='/signup-login' className='navbar btn btn-dark px-3 me-3 border'>SignUp/LogIn</Link>}
            </div>
        </nav>
    )
}

export default NavBar