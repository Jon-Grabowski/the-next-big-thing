import { useFormik } from "formik";
import * as yup from "yup";
import { UserContext } from "../context/user";
import { useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function SignUp(){
    //TODO ERROR HANDLING
    const {setUser} = useContext(UserContext)
    const history = useHistory()

    const formSchema = yup.object().shape({
        email: yup.string().email(),
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
                        setUser(user)
                        history.goBack()
                    })
                } else { 
                resp.json().then(message => console.log(message));
                }
            });
        },
    });


    return(
        <div className='container border pb-4'>
            <h1>Create An Account</h1>
            <form onSubmit={formik.handleSubmit}>

                                        {/* EMAIL */}
                <div className="mb-3 row m-0">
                    <label forhtml="email" className="form-label">Email address</label>
                    <div className="col-sm-4">             
                        <input
                        className="form-control col-sm-6 shadow-sm" 
                        type="text"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}/>
                    </div>
                </div>

                                        {/* PASSWORD */}
                <div className="mb-3 row m-0">
                    <label forhtml="password" className="form-label">Password</label>
                    <div className="col-sm-4">             
                        <input
                        className="form-control col-sm-6 shadow-sm" 
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}/>
                    </div>
                </div>

                                        {/* NAME */}
                <div className="mb-3 row m-0">
                    <label forhtml="first_name" className="form-label col-sm-3">First Name</label>
                    <label forhtml="last_name" className="form-label col-sm-6">Last Name</label>
                </div>
                <div className="mb-3 row m-0">
                    <div className="col-sm-3 m-0">             
                        <input
                        className="form-control shadow-sm" 
                        type="text"
                        name="first_name"
                        value={formik.values.first_name}
                        onChange={formik.handleChange}/>
                    </div>
                    <div className="col-sm-3 m-0">             
                        <input
                        className="form-control shadow-sm" 
                        type="text"
                        name="last_name"
                        value={formik.values.last_name}
                        onChange={formik.handleChange}/>
                    </div>
                </div>

                                        {/* AGE */}
                <div className="mb-3 row m-0">
                    <label forhtml="age" className="form-label">Age</label>
                    <div className="col-sm-2">             
                        <input
                        className="form-control col-sm-3 shadow-sm" 
                        type="text"
                        name="age"
                        value={formik.values.age}
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
                        <label forhtml="state" className="form-label col-sm-2">State</label>
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
                    <div className="col-sm-2 m-0">             
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

                                        {/* PROMO */}
                <div className="mb-3 row m-0">
                    
                    <div className="col-sm-1 my-3">             
                        <input
                        className='form-check-input shadow-sm'
                        type="checkbox"
                        checked={formik.values.promo}
                        name="promo"
                        value={formik.values.promo}
                        onChange={formik.handleChange}
                    />
                    </div>
                    <label forhtml='submit' className="col-sm-11 my-3">Sign up for promo? </label>
                </div>
                <div className='text-center'>
                    <input className='btn btn-primary px-3' type="submit" value='Sign Up' />
                </div>
            </form>
        </div>
    )
}

export default SignUp