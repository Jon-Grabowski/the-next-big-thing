import { useContext } from "react";
import { UserContext } from "../context/user";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function NavBarLogOut() {

    const {user, setUser} = useContext(UserContext)
    const history = useHistory()

    function handleClick() {
        fetch("/logout", {
            method: "DELETE",
            }).then(() => {
                setUser(null);
                history.push('/')
            });
        }

    return (
        <div>
            <h3 className='text-light'>Hello, {user.first_name}!</h3>
            <button onClick={handleClick} className='btn btn-secondary'>Log Out</button>
        </div>
    )
}

export default NavBarLogOut