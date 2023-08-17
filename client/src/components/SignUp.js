import { useFormik, Form } from "formik";
import * as yup from "yup";

function SignUp(){
    //TODO ERROR HANDLING

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
            resp.json().then((user) => {
                console.log(user)
            });
            } else {
            console.log("handle errors!!");
            }
            });
        },
    });


    return(
        <div>
            <h1>SignUp Page</h1>
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
                <label>First Name: </label>
                <input
                    type="text"
                    name="first_name"
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                />
                <label>Last Name: </label>
                <input
                    type="text"
                    name="last_name"
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                />
                <label>Age: </label>
                <input
                    type="text"
                    name="age"
                    value={formik.values.age}
                    onChange={formik.handleChange}
                />
                <label>Address: </label>
                <input
                    type="text"
                    name="street_address"
                    value={formik.values.street_address}
                    onChange={formik.handleChange}
                />
                <label>City: </label>
                <input
                    type="text"
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                />
                <label>State: </label>
                <input
                    type="text"
                    name="state"
                    value={formik.values.state}
                    onChange={formik.handleChange}
                />
                <label>Zip Code: </label>
                <input
                    type="text"
                    name="zip_code"
                    value={formik.values.zip_code}
                    onChange={formik.handleChange}
                />
                <input
                    type="checkbox"
                    name="promo"
                    value={formik.values.promo}
                    onChange={formik.handleChange}
                />
                <label>Sign up for promo? </label>
                <input className='btn btn-primary px-3' type="submit" value='Sign Up' />
            </form>
        </div>
    )
}

export default SignUp