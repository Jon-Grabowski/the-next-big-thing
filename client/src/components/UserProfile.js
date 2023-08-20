import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/user";
import ProfileView from "./ProfileView";
import ProfileEdit from "./ProfileEdit";
import PreOrderCard from "./PreOrderCard";

function UserProfile({fetchUser}) {
    const {user} = useContext(UserContext)
    const [edit, setEdit] = useState(false)
    

    function handleClick(){
        setEdit(!edit)
    }

    if(user) {
        const orderCards = user.orders.map((order) => {
            return <PreOrderCard 
                key={order.id} 
                order={order}
                fetchUser={fetchUser}
                />
        })
        return(
            <div>
                {edit ? 
                <p className='container-lg display-4 mb-3'>Edit Account Information</p>
                :<p className='container-lg display-4 mb-3'>Account Information</p>}
                <div className='container-lg mb-5 border p-3'>
                    
                    <button 
                    type="btn" 
                    className="btn btn-primary border border-info shadow-sm mb-3"
                    onClick={handleClick}
                    >{edit? 'Discard Changes' : 'Edit Profile'}</button>
                    {edit ? <ProfileEdit setEdit={setEdit}/> : <ProfileView />}
                </div>
                {edit? null :
                <div className='container-lg my-5'>
                    <p className='display-4'>Pre-Orders</p>
                    {orderCards}
                </div>
                }
            </div>

        )
    }
}

export default UserProfile