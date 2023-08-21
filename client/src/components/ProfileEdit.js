import { useContext, useState } from "react";
import { UserContext } from "../context/user";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useFormik } from "formik";
import * as yup from "yup";

function ProfileEdit({setEdit}){
    const {user, setUser} = useContext(UserContext)
    const [deleteTrigger, setDeleteTrigger] = useState(false)
    const history = useHistory()

    function trigger(){
        setDeleteTrigger(!deleteTrigger)
    }

    function handleDelete() {
        fetch(`/users/${user.id}`, {
            method: 'DELETE',
        }).then(r => {
            if (r.ok) {
                alert(`Account for ${user.email} deleted.`)
                setUser(null)
                history.push('/')
            } else {
                console.log('handle errors!')
            }
        })
    }

    const formSchema = yup.object().shape({
        email: yup.string().email(),  
    });

    const formik = useFormik({
        initialValues: {
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            street_address: user.street_address,
            city: user.city,
            state: user.state,
            zip_code: user.zip_code,
            promo: user.promo
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            fetch(`/users/${user.id}`, {
                method: "PATCH",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
                }).then((resp) => {
                if (resp.ok) {
                    resp.json().then((user) => {
                        setUser(user)
                        setEdit(false)
                        // history.goBack()
                    });
                } else {
                console.log("handle errors!!");
                }
            });
        }
    });

    return(
        <div>
            <div className='container-lg border p-3'>
                <form onSubmit={formik.handleSubmit}>                                  

                                                        {/* EMAIL */}            
                    <div className="mb-3 row m-0">
                        <label forhtml="email" className="form-label">Email address</label>
                        <div className="col-sm-6">             
                            <input
                            className="form-control col-sm-6 shadow-sm" 
                            type="text"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}/>
                        </div>
                    </div>

                                                    {/* NAME */}
                    <div className="mb-3 row m-0">
                            <label forhtml="first_name" className="form-label col-sm-4">First Name</label>
                            <label forhtml="last_name" className="form-label col-sm-6">Last Name</label>
                    </div>
                    <div className="mb-3 row m-0">
                        <div className="col-sm-4 m-0">             
                            <input
                            className="form-control shadow-sm" 
                            type="text"
                            name="first_name"
                            value={formik.values.first_name}
                            onChange={formik.handleChange}/>
                        </div>
                        <div className="col-sm-4 m-0">             
                            <input
                            className="form-control shadow-sm" 
                            type="text"
                            name="last_name"
                            value={formik.values.last_name}
                            onChange={formik.handleChange}/>
                        </div>
                    </div>

                                                    {/* ADDRESS */}
                    <div className="mb-3 row m-0">
                        <label forhtml="street_address" className="form-label">Street Address</label>
                        <div className="col-sm-6">             
                            <input
                            className="form-control shadow-sm" 
                            type="text"
                            name="street_address"
                            value={formik.values.street_address}
                            onChange={formik.handleChange}/>
                        </div>
                    </div>
                    <div className="mb-3 row m-0">
                            <label forhtml="city" className="form-label col-sm-3">City</label>
                            <label forhtml="state" className="form-label col-sm-1">State</label>
                            <label forhtml="zip_code" className="form-label col-sm-4">Zip Code</label>
                    </div>
                    <div className="mb-3 row m-0">
                        <div className="col-sm-3 m-0">             
                            <input
                            className="form-control shadow-sm" 
                            type="text"
                            name="city"
                            value={formik.values.city}
                            onChange={formik.handleChange}/>
                        </div>
                        <div className="col-sm-1 m-0">             
                            <input
                            className="form-control shadow-sm" 
                            type="text"
                            name="state"
                            value={formik.values.state}
                            onChange={formik.handleChange}/>
                        </div>
                        <div className="col-sm-2 m-0">             
                            <input
                            className="form-control shadow-sm" 
                            type="text"
                            name="zip_code"
                            value={formik.values.zip_code}
                            onChange={formik.handleChange}/>
                        </div>
                    </div>

                    <div className="mb-3 row m-0">
                    <label forhtml='submit' className="col-sm-2 my-3">Sign up for promo? </label>
                        <div className="col-sm-6 my-3">             
                            <input
                            className='form-check-input shadow-sm'
                            type="checkbox"
                            checked={formik.values.promo}
                            name="promo"
                            value={formik.values.promo}
                            onChange={formik.handleChange}
                        />
                        </div>
                    </div>
                    <input className='btn btn-primary px-3' type="submit" value='Save Changes' />
                </form>
            </div>
            {deleteTrigger ?
            <div className='bg-danger container-lg d-flex justify-content-end border bg-opacity-25'>
                <button className='btn btn-secondary px-3 my-3 mx-2' onClick={trigger}>Cancel</button>
                <button className='btn btn-danger px-3 my-3' onClick={handleDelete}>Confirm Delete</button>
            </div>
            :
            <div className='container-lg d-flex justify-content-end border'>
                <button className='btn btn-danger px-3 m-3' onClick={trigger}>Delete Account</button>
            </div>
            }
            
        </div>
    )
}

export default ProfileEdit