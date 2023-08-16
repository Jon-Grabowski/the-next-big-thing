import SignUp from "./SignUp";
import Login from "./Login";
import { useContext } from "react";
import { UserContext } from "../context/user";

function UserPage() {
    const {user} = useContext(UserContext)

    return(
        <div>
            { user ? 
            <div>User Profile Page</div> 
            :
            <div>
                <SignUp />
                <Login />
            </div>
            }
        </div>
    )
}

export default UserPage