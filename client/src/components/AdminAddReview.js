import { useFormik } from "formik";

function AdminAddReview(){

    function addReview(newReview) {
        console.log(newReview)
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
                    <label forhtml="name" className="form-label fs-4">Name</label>
                    <div className="col">             
                        <input
                        className="form-control col-sm-6 shadow-sm" 
                        type="text"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}/>
                    </div>
                </div>

                                {/* Title */}
                <div className="mb-3 row m-0">
                    <label forhtml="title" className="form-label fs-4">Title</label>
                    <div className="col">             
                        <input
                        className="form-control col-sm-6 shadow-sm" 
                        type="text"
                        name="title"
                        value={formik.values.title}
                        onChange={formik.handleChange}/>
                    </div>
                </div>

                                {/* Body */}
                <div className="mb-3 row m-0">
                    <label forhtml="body" className="form-label fs-4">Review</label>
                    <div className="col">             
                        <input
                        className="form-control col-sm-6 shadow-sm" 
                        type="text"
                        name="body"
                        value={formik.values.body}
                        onChange={formik.handleChange}/>
                    </div>
                </div>

                                {/* Image */}
                <div className="mb-3 row m-0">
                    <label forhtml="image" className="form-label fs-4">Image Link</label>
                    <div className="col">             
                        <input
                        className="form-control col-sm-6 shadow-sm" 
                        type="text"
                        name="image"
                        value={formik.values.image}
                        onChange={formik.handleChange}/>
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