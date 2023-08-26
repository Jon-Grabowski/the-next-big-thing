import { useFormik } from "formik";
import * as yup from "yup";
import { UserContext } from "../context/user";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function SignUp({formTrigger, setFormTrigger}){
    //TODO ERROR HANDLING
    const {setUser} = useContext(UserContext)
    const history = useHistory()
    const [error, setError] = useState('')

    function handleClick() {
        setFormTrigger(!formTrigger)
    }

    const formSchema = yup.object().shape({
        email: yup.string().email('Invaild email'),
        password: yup.string().min(8),
        zip_code: yup.string().min(5, 'Invalid zip code').max(5, 'Invalid zip code'),
        city: yup.string().min(3, "Invalid city")
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            age: "",
            street_address: "",
            city: "",
            state: "",
            zip_code: "",
            promo: false
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            fetch("/users", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
                }).then((resp) => {
                if (resp.ok) {
                    resp.json().then(user => {
                        setError('')
                        setUser(user)
                        history.goBack()
                    })
                } else { 
                resp.json().then(message => setError(message.errors));
                }
            });
        },
    });

    return(
        <div className='container-lg bg-dark bg-opacity-50 text-light shadow p-3 rounded border border-4 border-white border-end-0 border-start-0'>
            <h1 className='display-5 text-center mb-4'>Create An Account</h1>
            <form onSubmit={formik.handleSubmit}>

                                        {/* EMAIL */}
                <div className="mb-3 row m-0 p-0">
                    <label forhtml="email" className="form-label m-0 fs-5">Email address</label>
                    <div className="col-sm-7">             
                        <input
                        className="form-control col-sm-6 shadow-sm border border-2 border-secondary" 
                        type="text"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        required/>
                        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                    </div>
                </div>

                                        {/* PASSWORD */}
                <div className="mb-3 row m-0">
                    <label forhtml="password" className="form-label m-0 fs-5">Password</label>
                    <div className="col-sm-7">             
                        <input
                        className="form-control col-sm-6 shadow-sm border border-2 border-secondary" 
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        required/>
                        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                    </div>
                </div>

                                        {/* NAME */}
                <div className="row m-0">
                    <label forhtml="first_name" className="form-label col-sm-6 m-0 fs-5">First Name</label>
                    <label forhtml="last_name" className="form-label col-sm-6 m-0 fs-5">Last Name</label>
                </div>
                <div className="mb-3 row m-0">
                    <div className="col-sm-6 m-0">             
                        <input
                        className="form-control shadow-sm border border-2 border-secondary" 
                        type="text"
                        name="first_name"
                        value={formik.values.first_name}
                        onChange={formik.handleChange}
                        required/>
                    </div>
                    <div className="col-sm-6 m-0">             
                        <input
                        className="form-control shadow-sm border border-2 border-secondary" 
                        type="text"
                        name="last_name"
                        value={formik.values.last_name}
                        onChange={formik.handleChange}
                        required/>
                    </div>
                </div>

                                        {/* AGE */}
                <div className="mb-3 row m-0">
                    <label forhtml="age" className="form-label m-0 fs-5">Age</label>
                    <div className="col-sm-2">             
                        <input
                        className="form-control col-sm-3 shadow-sm border border-2 border-secondary" 
                        type="text"
                        name="age"
                        value={formik.values.age}
                        onChange={formik.handleChange}
                        required/>
                    </div>
                </div>

                                        {/* ADDRESS */}
                <div className="mb-3 row m-0">
                    <label forhtml="street_address" className="form-label m-0 fs-5">Street Address</label>
                    <div className="col-sm-7">             
                        <input
                        className="form-control shadow-sm border border-2 border-secondary" 
                        type="text"
                        name="street_address"
                        value={formik.values.street_address}
                        onChange={formik.handleChange}
                        required/>
                    </div>
                </div>

                <div className="row m-0">
                        <label forhtml="city" className="form-label col-sm-3 m-0 fs-5">City</label>
                        <label forhtml="state" className="form-label col-sm-2 m-0 fs-5">State</label>
                        <label forhtml="zip_code" className="form-label col-sm-4 m-0 fs-5">Zip Code</label>
                </div>
                <div className="row m-0">
                    <div className="col-sm-3 m-0">             
                        <input
                        className="form-control shadow-sm border border-2 border-secondary" 
                        type="text"
                        name="city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        required/>
                        {formik.errors.city ? <div>{formik.errors.city}</div> : null}
                    </div>
                    
                    <div className="col-sm-2 m-0">             
                        <select
                        className="btn dropdown-toggle border shadow-sm bg-white border border-2 border-secondary text-dark" 
                        // type="text"
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
                    <div className="col-sm-3 m-0">             
                        <input
                        className="form-control shadow-sm border border-2 border-secondary" 
                        type="text"
                        name="zip_code"
                        value={formik.values.zip_code}
                        onChange={formik.handleChange}
                        required/>
                        {formik.errors.zip_code ? <div>{formik.errors.zip_code}</div> : null}
                    </div>
                </div>

                                        {/* PROMO */}
                <div className="mb-3 row m-0">
                    
                    <div className="col-sm-1 my-3 text-center">             
                        <input
                        className='form-check-input shadow-sm border border-2 border-secondary align-middle btn btn-lg'
                        type="checkbox"
                        checked={formik.values.promo}
                        name="promo"
                        value={formik.values.promo}
                        onChange={formik.handleChange}
                    />
                    </div>
                    <label forhtml='submit' className="col-sm-11 my-3 fs-5">Sign up for promo? </label>
                </div>
                {error ? <div>{error}</div> : null}
                <div className='text-center'>
                    <input className='btn btn-success px-3 mb-4' type="submit" value='Sign Up' />
                </div>
                <div className='text-center border-top pt-4'>
                    <p className='fs-5 mb-2'>Already have an account? </p>
                    <button onClick={handleClick} className='btn btn-primary'>Log In</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp