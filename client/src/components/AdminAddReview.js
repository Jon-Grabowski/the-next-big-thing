import { useFormik } from "formik";
import { useState } from "react";

function AdminAddReview(){
    const [error, setError] = useState('')
    function addReview(newReview) {
        fetch("/reviews", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(newReview),
            }).then((resp) => {
            if (resp.ok) {
                resp.json().then(review => {
                    console.log(review)
                })
            } else { 
            resp.json().then(message => setError(message.errors));
            }
        });
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            title:"",
            body: "",
            image:""
        },
        onSubmit: (reviewInfo) => {addReview(reviewInfo)}
        });

    return (
        <div>
            <h2>Add Review</h2>
            <form onSubmit={formik.handleSubmit}>

                                {/* Name */}
                <div className="mb-3 row m-0">
                    <div className="col">             
                        <input
                        className="form-control col-sm-6 shadow-sm" 
                        type="text"
                        name="name"
                        placeholder="Reviewer's Name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        required/>
                    </div>
                </div>

                                {/* Title */}
                <div className="mb-3 row m-0">
                    <div className="col">             
                        <input
                        className="form-control col-sm-6 shadow-sm" 
                        type="text"
                        name="title"
                        placeholder="Reviewer's Title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        required/>
                    </div>
                </div>

                                {/* Body */}
                <div className="mb-3 row m-0">
                    <div className="col">             
                        <textarea
                        className="form-control col-sm-6 shadow-sm" 
                        type="text"
                        name="body"
                        placeholder="Review..."
                        rows='10'
                        cols="50"
                        value={formik.values.body}
                        onChange={formik.handleChange}
                        required/>
                    </div>
                </div>

                                {/* Image */}
                <div className="mb-3 row m-0">
                    <div className="col">             
                        <input
                        className="form-control col-sm-6 shadow-sm" 
                        type="text"
                        name="image"
                        placeholder="Reviewer Image Link"
                        value={formik.values.image}
                        onChange={formik.handleChange}
                        required/>
                    </div>
                </div>

                <div className='text-center mb-4'>
                    <input className='btn btn-success px-3 mb-3' type="submit" value='Add Review' />
                </div>
            </form>
        </div>
    )
}

export default AdminAddReview