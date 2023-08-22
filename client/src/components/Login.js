import { useFormik, Form } from "formik";
import { useContext, useState } from "react";
import * as yup from "yup";
import { UserContext } from "../context/user";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Login() {
    //TODO ERROR HANDLING

    const {setUser} = useContext(UserContext)
    const [error, setError] = useState('')
    const history = useHistory()

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
        <div className='border'>
            <h1>Log In</h1>
            <form onSubmit={formik.handleSubmit}>

                                {/* EMAIL */}
                <div className="mb-3 row m-0">
                    <label forhtml="email" className="form-label">Email address</label>
                    <div className="col-sm-10">             
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
                    <div className="col-sm-10">             
                        <input
                        className="form-control col-sm-6 shadow-sm" 
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}/>
                    </div>
                </div>
                {error ? <div>{error}</div> : null}
                <div className='text-center'>
                    <input className='btn btn-primary px-3 mb-3' type="submit" value='Log In' />
                </div>
            </form>
        </div>
    )
}

export default Login