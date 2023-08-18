import { useContext } from "react";
import { UserContext } from "../context/user";

function UserProfile() {
    const {user} = useContext(UserContext)
    
    if(user) {
        const address = `${user.street_address}, ${user.city}, ${user.state} ${user.zip_code}`
        const name = `${user.first_name} ${user.last_name}`
        return(
            <div className='container-lg'>
                <div className='border my-4 pt-2'>
                    <p className='h3 mb-5'>Account Information</p> 
                    <div className="mb-1 row m-0">
                        <label for="staticEmail" className="col-sm-2 col-form-label"><span className='h5'>Email</span></label>
                        <div className="col-sm-4">
                            <input type="text" readonly className="form-control-plaintext profile-user-info" id="staticEmail" value={user.email}/>
                        </div>
                        <div class="col-sm-6">
                            <button type="btn" class="btn btn-white border border-info shadow-sm mb-3">✏️</button>
                        </div>
                    </div>
                    <div className="mb-1 row m-0">
                        <label for="staticName" className="col-sm-2 col-form-label"><span className='h5'>Name</span></label>
                        <div className="col-sm-4">
                            <input type="text" readonly className="form-control-plaintext profile-user-info" id="staticName" value={name}/>
                        </div>
                        <div class="col-sm-6">
                            <button type="btn" class="btn btn-white border border-info shadow-sm mb-3">✏️</button>
                        </div>
                    </div>
                    <div className="mb-1 row m-0">
                        <label for="staticAddress" className="col-sm-2 col-form-label"><span className='h5'>Adress</span></label>
                        <div className="col-sm-4">
                            <input type="text" readonly className="form-control-plaintext profile-user-info" id="staticAddress" value={address}/>
                        </div>
                        <div class="col-sm-6">
                            <button type="btn" class="btn btn-white border border-info shadow-sm mb-3">✏️</button>
                        </div>
                    </div>
                </div>

                {/* ORDERS SECTION */}
                <p className='h3'>Pre-Orders</p>
            </div>
        )
    }
}

export default UserProfile