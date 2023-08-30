import { useContext, useState } from "react";
import { UserContext } from "../context/user";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useFormik } from "formik";
import * as yup from "yup";

function ProfileEdit({setEdit}){
    const {user, setUser} = useContext(UserContext)
    const [deleteTrigger, setDeleteTrigger] = useState(false)
    const history = useHistory()
    const [error, setError] = useState('')

    

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
        email: yup.string().email('Invaild email'),
        zip_code: yup.string().min(5, 'Invalid zip code').max(5, 'Invalid zip code'),
        city: yup.string().min(3, "Invalid city")
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
                        setError('')
                        setUser(user)
                        setEdit(false)
                    });
                } else {
                    resp.json().then(message => setError(message.errors));
                }
            });
        }
    });

    return(
        <div>
            <div className='container-lg text-light p-3'>
                <form onSubmit={formik.handleSubmit}>                                  

                                                        {/* EMAIL */}            
                    <div className="mb-3 row m-0 lead">
                        <label forhtml="email" className="form-label">Email address</label>
                        <div className="col-sm-6">             
                            <input
                            className="form-control col-sm-6 shadow-sm" 
                            type="text"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            required/>
                            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                        </div>
                    </div>

                                                    {/* NAME */}
                    <div className="mb-0 row m-0 lead">
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
                            onChange={formik.handleChange}
                            required/>
                        </div>
                        <div className="col-sm-4 m-0">             
                            <input
                            className="form-control shadow-sm" 
                            type="text"
                            name="last_name"
                            value={formik.values.last_name}
                            onChange={formik.handleChange}
                            required/>
                        </div>
                    </div>

                                                    {/* ADDRESS */}
                    <div className="mb-3 row m-0 lead">
                        <label forhtml="street_address" className="form-label">Street Address</label>
                        <div className="col-sm-6">             
                            <input
                            className="form-control shadow-sm" 
                            type="text"
                            name="street_address"
                            value={formik.values.street_address}
                            onChange={formik.handleChange}
                            required/>
                        </div>
                    </div>

                    <div className="row m-0 lead">
                            <label forhtml="city" className="form-label col-3">City</label>
                            <label forhtml="state" className="form-label col-2">State</label>
                            <label forhtml="zip_code" className="form-label col-7">Zip Code</label>
                    </div>
                    <div className="mb-3 row m-0">
                        <div className="col-3 m-0">             
                            <input
                            className="form-control shadow-sm" 
                            type="text"
                            name="city"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            required/>
                            {formik.errors.city ? <div>{formik.errors.city}</div> : null}
                        </div>
                        <div className="col-2 m-0">             
                            <select
                            className="btn dropdown-toggle border shadow-sm text-dark bg-white" 
                            name="state"
                            value={formik.values.state}
                            onChange={formik.handleChange}
                            required>
                                <option value="">--</option>
                                <option value="AL">AL</option>
                                <option value="AK">AK</option>
                                <option value="AZ">AZ</option>
                                <option value="AR">AR</option>
                                <option value="CA">CA</option>
                                <option value="CO">CO</option>
                                <option value="CT">CT</option>
                                <option value="DE">DE</option>
                                <option value="DC">DC</option>
                                <option value="FL">FL</option>
                                <option value="GA">GA</option>
                                <option value="HI">HI</option>
                                <option value="ID">ID</option>
                                <option value="IL">IL</option>
                                <option value="IN">IN</option>
                                <option value="IA">IA</option>
                                <option value="KS">KS</option>
                                <option value="KY">KY</option>
                                <option value="LA">LA</option>
                                <option value="ME">ME</option>
                                <option value="MD">MD</option>
                                <option value="MA">MA</option>
                                <option value="MI">MI</option>
                                <option value="MN">MN</option>
                                <option value="MS">MS</option>
                                <option value="MO">MO</option>
                                <option value="MT">MT</option>
                                <option value="NE">NE</option>
                                <option value="NV">NV</option>
                                <option value="NH">NH</option>
                                <option value="NJ">NJ</option>
                                <option value="NM">NM</option>
                                <option value="NY">NY</option>
                                <option value="NC">NC</option>
                                <option value="ND">ND</option>
                                <option value="OH">OH</option>
                                <option value="OK">OK</option>
                                <option value="OR">OR</option>
                                <option value="PA">PA</option>
                                <option value="RI">RI</option>
                                <option value="SC">SC</option>
                                <option value="SD">SD</option>
                                <option value="TN">TN</option>
                                <option value="TX">TX</option>
                                <option value="UT">UT</option>
                                <option value="VT">VT</option>
                                <option value="VA">VA</option>
                                <option value="WA">WA</option>
                                <option value="WV">WV</option>
                                <option value="WI">WI</option>
                                <option value="WY">WY</option>
                            </select>
                        </div>
                        <div className="col-sm-2 m-0">             
                            <input
                            className="form-control shadow-sm" 
                            type="text"
                            name="zip_code"
                            value={formik.values.zip_code}
                            onChange={formik.handleChange}
                            required/>
                            {formik.errors.zip_code ? <div>{formik.errors.zip_code}</div> : null}
                        </div>
                    </div>

                    <div className="mb-3 row m-0">
                    <label forhtml='submit' className="col-md-3 my-3">Sign up for promo? </label>
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
                    {error ? <div>{error}</div> : null}
                    <input className='btn btn-primary px-3' type="submit" value='Save Changes' />
                </form>
            </div>
            {deleteTrigger ?
            <div className='bg-danger container-lg d-flex justify-content-end bg-opacity-50 align-items-center border-top border-bottom'>
                <p className='text-light fs-5 me-4'><strong>Are you sure you want to delete your account?</strong></p>
                <button className='btn btn-secondary px-3 my-3 mx-2' onClick={trigger}>Cancel</button>
                <button className='btn btn-danger px-3 my-3' onClick={handleDelete}>Confirm Delete</button>
            </div>
            :
            <div className='container-lg d-flex justify-content-end align-items-center border-top border-bottom'>
                <button className='btn btn-danger px-3 m-3' onClick={trigger}>Delete Account</button>
            </div>
            }
        </div>
    )
}

export default ProfileEdit