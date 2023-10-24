import { useFormik } from "formik";
import { useContext, useState } from "react";
import * as yup from "yup";
import { UserContext } from "../context/user";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function Login({formTrigger, setFormTrigger}) {

    const {setUser} = useContext(UserContext)
    const [error, setError] = useState('')
    const history = useHistory()

    function handleClick() {
        setFormTrigger(!formTrigger)
    }

    function login(loginInfo) {
        fetch('/login', {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(loginInfo),
        }).then((resp) => {
            if (resp.ok) {
                resp.json().then((user) => {
                    setUser(user)
                    setError('')
                    history.goBack()
                });
            } else {
                resp.json().then(message => setError(message['error']));
            }
        });
    }


    const formSchema = yup.object().shape({
        email: yup.string().email(),
    });
    
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: formSchema,
        onSubmit: (loginInfo) => {login(loginInfo)}
        });

    return (
        <div className='container-lg bg-dark bg-opacity-50 text-light shadow p-4 rounded border border-4 border-white border-end-0 border-start-0'>
            <h1 className='display-5 text-center mb-4'>Log In</h1>
            <form onSubmit={formik.handleSubmit}>

                                {/* EMAIL */}
                <div className="mb-3 row m-0">
                    <label forhtml="email" className="form-label fs-4">Email address</label>
                    <div className="col">             
                        <input
                        className="form-control col-sm-6 shadow-sm" 
                        type="text"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}/>
                    </div>
                </div>

                                {/* PASSWORD */}
                <div className="mb-4 row m-0">
                    <label forhtml="password" className="form-label fs-4">Password</label>
                    <div className="col">             
                        <input
                        className="form-control col-sm-6 shadow-sm" 
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}/>
                    </div>
                </div>
                {error ? <div>{error}</div> : null}
                <div className='text-center mb-4'>
                    <input className='btn btn-success px-3 mb-3' type="submit" value='Log In' />
                </div>
                <div className='text-center border-top pt-4'>
                    <p className='fs-5 mb-1'>Don't have an account? </p>
                    <button onClick={handleClick} className='btn btn-primary'>Create one Now</button>
                </div>
            </form>
        </div>
    )
}

export default Login