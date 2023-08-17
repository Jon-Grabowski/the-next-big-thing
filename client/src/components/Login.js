import { useFormik, Form } from "formik";
import { useContext } from "react";
import * as yup from "yup";
import { UserContext } from "../context/user";

function Login() {
    //TODO ERROR HANDLING

    const {setUser} = useContext(UserContext)

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
                console.log('logged in')
            });
            } else {
            console.log("didn't work!!");
            }
            });
        },
    });

    function handleClick() {
        fetch("/logout", {
            method: "DELETE",
            }).then(() => {
                setUser(null);
            });
    }

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
            <button onClick={handleClick}>Log Out</button>
        </div>
    )
}

export default Login