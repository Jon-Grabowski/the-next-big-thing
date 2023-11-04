import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/user";
import ProfileView from "./ProfileView";
import ProfileEdit from "./ProfileEdit";
import PreOrderCard from "./PreOrderCard";

function UserProfile({fetchUser, getProducts}) {
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
                getProducts={getProducts}
                />
        })

        return(
            <div>
                {edit ? 
                <p className='container-lg display-4 mb-3 border-bottom border-black border-2'>Edit Account Information</p>
                :<p className='container-lg display-4 mb-3 border-bottom border-black border-2'>Account Information</p>}
                <div className='container-lg mb-5 bg-black bg-opacity-50 border-top border-bottom border-3 rounded p-3 w-50'>
                    
                    <button 
                    type="btn" 
                    className="btn btn-secondary border border-info shadow-sm mb-3"
                    onClick={handleClick}
                    >{edit? 'Discard Changes' : 'Edit Profile'}</button>
                    {edit ? <ProfileEdit setEdit={setEdit}/> : <ProfileView />}
                </div>
                {edit? null :
                <div className='container-lg'>
                    <p className='display-4 border-bottom border-black border-2 ps-2 text-black'>Pre-Orders</p>
                    <div className=''>
                        {orderCards}
                    </div>
                </div>
                }
            </div>
        )
    }
}

export default UserProfile