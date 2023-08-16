import { useFormik, Form } from "formik";
import { useContext } from "react";
import * as yup from "yup";
import { UserContext } from "../context/user";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Login() {
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
        },
    validationSchema: formSchema,
    onSubmit: (values) => {
        fetch('/login', {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        }).then((resp) => {
            if (resp.ok) {
            resp.json().then((user) => {
                setUser(user)
                history.push('/')
            });
            } else {
            console.log("didn't work!!");
            }
            });
        },
    });

    return (
        <div>
            <h1>Log In Page</h1>
            <form onSubmit={formik.handleSubmit}>
                <label>Email: </label>
                <input
                    type="text"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                <label>Password: </label>
                <input
                    type="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
                <input type="submit" value='Log In' />
            </form>
        </div>
    )
}

export default Login