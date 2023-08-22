import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min"
import { UserContext } from "../context/user"
import { useContext } from "react"
import NavBarLogOut from "./NavBarLogOut"

function NavBar() {
    const {user, setUser} = useContext(UserContext)


    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className = 'navbar-brand ms-4'>
                    <h1 className='display-5 fw-bold'>THE NEXT BIG THING</h1>
                </div>
            <div className="container-fluid">
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Nav Bar Links */}
                <div className="collapse navbar-collapse justify-content-start align-center" id="navbarSupportedContent">
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink to='/' exact={true} className='nav-link'>Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/shop' className='nav-link'>Shop</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/about' className='nav-link'>About</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/reviews' className='nav-link'>Early Reviews</NavLink>
                        </li>
                    </ul>
                </div>
                <div >
                    {user ? <NavBarLogOut /> : <Link to='/signup-login' className='navbar btn btn-dark px-3 border'>SignUp/LogIn</Link>}
                </div>
            </div>
        </nav>
    )
}

export default NavBar