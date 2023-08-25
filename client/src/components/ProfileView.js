import { useContext } from "react";
import { UserContext } from "../context/user";

function ProfileView(){

    const {user} = useContext(UserContext)
    const address = `${user.street_address}, ${user.city},\n ${user.state} ${user.zip_code}`
    const name = `${user.first_name} ${user.last_name}`

    return(
        <div className='text-light fs-5 border w-100'>
            <div className="mb-3 row m-0">
                <div className="col-sm-2 lead">  
                    <label forhtml="exampleFormControlInput1" className="form-label">Email: </label>
                </div>
                <div className="col-sm-6 text-start">
                    <p>{user.email}</p>
                </div>
            </div>
            <div className="mb-3 row m-0">
                <div className="col-sm-2 lead">  
                    <label forhtml="exampleFormControlInput1" className="form-label">Name: </label>
                </div>
                <div className="col-sm-6">
                    <p>{name}</p>
                </div>
            </div>
            <div className="mb-3 row m-0">
                <div className="col-sm-2 lead">  
                    <label forhtml="exampleFormControlInput1" className="form-label">Address: </label>
                </div>
                <div className="col-sm-9">
                    <p>{address}</p>
                </div>
            </div>
            <div className="mb-3 row m-0">
                <div className="col-sm-2 lead">  
                    <label forhtml="exampleFormControlInput1" className="form-label">Promo: </label>
                </div>
                <div className="col-sm-9">
                    {user.promo ? <p>Yes, send me promotional material</p> : <p>No, don't send me promotional material</p>}
                </div>
            </div>
            {/* ORDERS SECTION */}
            
        </div>
    )
}

export default ProfileView