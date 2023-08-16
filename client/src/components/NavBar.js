import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { UserContext } from "../context/user"
import { useContext } from "react"
import NavBarLogOut from "./NavBarLogOut"

function NavBar() {
    const {user, setUser} = useContext(UserContext)


    return(
        <div id="nav-bar-wrapper">
            <div id='nav-links'>

            </div>
            <div id='nav-bar-heading'>
                <h1>THE NEXT BIG THING</h1>
            </div>
            <div id='nav-bar-signup-login'>
                {user ? <NavBarLogOut /> : <Link to='/signup-login'>SignUp/LogIn</Link>}
            </div>
        </div>
    )
}

export default NavBar