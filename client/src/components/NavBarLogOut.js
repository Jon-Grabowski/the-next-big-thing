import { useContext } from "react";
import { UserContext } from "../context/user";
import { Link } from "react-router-dom/cjs/react-router-dom.min"

function NavBarLogOut() {

    const { user, setUser } = useContext(UserContext)

    function handleClick() {
        fetch("/logout", {
            method: "DELETE",
            }).then(() => {
                setUser(null);
            });
        }

    return (
        <div>
            <div className="" id="navbarNavDarkDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                    <button className="btn btn-dark dropdown-toggle border border-secondary me-4 px-4" data-bs-toggle="dropdown" aria-expanded="false">
                        Hi, {user.first_name}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark" style={{'minWidth': '7rem'}}>
                        <li className='nav-item dropdown'>
                            <Link to='/user' className='nav-link text-light'>Account</Link>
                        </li>
                        <li className='nav-item dropdown'>
                            <Link to='/' className='nav-link text-light' onClick={handleClick}>Logout</Link>
                        </li>
                    </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBarLogOut