import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min"
import { UserContext } from "../context/user"
import { useContext } from "react"
import NavBarLogOut from "./NavBarLogOut"

function NavBar() {
    const {user, setUser} = useContext(UserContext)


    return(
        <nav class="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                {/* Nav Bar Links */}
                <div className="collapse navbar-collapse justify-content-start align-center" id="navbarSupportedContent">
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink to='/' className='nav-link'>Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/shop' className='nav-link'>Shop</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/about' className='nav-link'>About</NavLink>
                        </li>
                    </ul>
                </div>
                <div className = 'navbar-brand'>
                    <h1 className='display-2 fw-bold'>THE NEXT BIG THING</h1>
                </div>
                <div >
                    {user ? <NavBarLogOut /> : <Link to='/signup-login' className='btn btn-secondary px-3'>SignUp/LogIn</Link>}
                </div>
            </div>
        </nav>
    )
}

export default NavBar