import { useContext } from "react";
import { UserContext } from "../context/user";

function ProfileView(){

    const {user} = useContext(UserContext)
    const address = `${user.street_address}, ${user.city},\n ${user.state} ${user.zip_code}`
    const name = `${user.first_name} ${user.last_name}`

    return(
        <div>
            <div className="mb-3 row m-0">
                <div className="col-sm-1">  
                    <label forhtml="exampleFormControlInput1" className="form-label">Email: </label>
                </div>
                <div className="col-sm-6">
                    <h6>{user.email}</h6>
                </div>
            </div>
            <div className="mb-3 row m-0">
                <div className="col-sm-1">  
                    <label forhtml="exampleFormControlInput1" className="form-label">Name: </label>
                </div>
                <div className="col-sm-6">
                    <h6>{name}</h6>
                </div>
            </div>
            <div className="mb-3 row m-0">
                <div className="col-sm-1">  
                    <label forhtml="exampleFormControlInput1" className="form-label">Address: </label>
                </div>
                <div className="col-sm-6">
                    <h6>{address}</h6>
                </div>
            </div>
            <div className="mb-3 row m-0">
                <div className="col-sm-1">  
                    <label forhtml="exampleFormControlInput1" className="form-label">Promo: </label>
                </div>
                <div className="col-sm-6">
                    {user.promo ? <h6>Yes, send me promotional material</h6> : <h6>No, don't send me promotional material</h6>}
                </div>
            </div>
            {/* ORDERS SECTION */}
            
        </div>
    )
}

export default ProfileView