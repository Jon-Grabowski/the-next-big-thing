import { useContext } from "react";
import { UserContext } from "../context/user";

function UserProfile() {
    const {user} = useContext(UserContext)

    return(
        <div>
            <div>User Profile Page</div> 
        </div>
    )
}

export default UserProfile