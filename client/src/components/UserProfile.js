import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/user";
import ProfileView from "./ProfileView";
import ProfileEdit from "./ProfileEdit";

function UserProfile() {
    const {user} = useContext(UserContext)
    const [edit, setEdit] = useState(false)

    function handleClick(){
        setEdit(!edit)
    }

    if(user) {
        return(
            <div>
                <div className='container-lg my-5'>
                    <button 
                    type="btn" 
                    className="btn btn-primary border border-info shadow-sm mb-3"
                    onClick={handleClick}
                    >{edit? 'Discard Changes' : 'Edit Profile'}</button>
                    {edit ? <ProfileEdit setEdit={setEdit}/> : <ProfileView />}
                </div>
                <div className='container-lg my-5'>
                    <p className='h3'>Pre-Orders</p>
                </div>
            </div>

        )
    }
}

export default UserProfile