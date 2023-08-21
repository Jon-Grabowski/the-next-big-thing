import { useContext } from "react";
import { UserContext } from "../context/user";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom/cjs/react-router-dom.min"

function NavBarLogOut() {

    const {user, setUser} = useContext(UserContext)
    const history = useHistory()

    function handleClick() {
        fetch("/logout", {
            method: "DELETE",
            }).then(() => {
                setUser(null);
            });
        }

    return (
        <div>
            {/* <button onClick={handleClick} className='btn btn-secondary'>Log Out</button> */}
            <div className="container-fluid me-2">
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target="#user-dropdown" aria-controls="user-dropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar h5 text-light">Hello, {user.first_name}!</span>
                </button>
                {/* Nav Bar Links */}
                <div className="collapse navbar-collapse justify-content-start align-center" id="user-dropdown">
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link to='/user' className='nav-link'>Profile</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link' onClick={handleClick}>Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBarLogOut