import { useFormik } from 'formik'
import { useState } from 'react'

function AdminReviewCard({currReview, setReviews, reviewsArray}) {
    const [review, setReview] = useState(currReview)
    const {id, name, title, body, image} = review
    

    const formik = useFormik({
        initialValues: {
            name: name,
            title: title,
            body: body,
            image: image
        },
        onSubmit: (reviewInfo) => {
            fetch(`/reviews/${id}`, {
            method: "PATCH",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(reviewInfo),
            }).then((r) => r.json()).then((patchedReview) => {
                const filteredReviews = reviewsArray.map((review) => {
                    if (review.id === patchedReview.id){
                        return patchedReview
                    }return review}
                );
                setReviews(filteredReviews);
                setReview(patchedReview);
            })
        }
    });

    function handleDelete() {
        fetch(`/reviews/${id}`, {
            method: "DELETE"
        }).then(r => {
            if (r.ok) {
                alert(`Review by ${name} deleted.`);
                const filteredReviews = reviewsArray.filter((review) => review.id !== id)
                setReviews(filteredReviews)
            } else {
                console.log('handle errors!')
            }
        })
    }
        
    return(
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${name[0]}${id}`} aria-expanded="false" aria-controls="collapseTwo">
                <strong className='fs-5'>{name},</strong><em className='fs-6 ps-2 '>{title}</em>
            </button>
            </h2>
            <div id={`${name[0]}${id}`} className="accordion-collapse collapse" data-bs-parent="#reviewAccordion">
                <div className="accordion-body">
                    <div className='d-xl-flex flex-row'>
                        <img src={image} alt={name} style={{'height': "9rem"}} className='me-4 mb-4'/>
                        <p>{body}</p>
                    </div>
                    <div className='d-xl-flex flex-row justify-content-evenly my-2'>
                        <button 
                            type="button"
                            className='btn btn-warning btn-lg rounded-pill border border-black' 
                            style={{'width': '7rem'}}
                            data-bs-toggle="modal" data-bs-target={`#${id}editReviewModal`}
                        >Edit</button>
                        <button 
                            className='btn btn-danger btn-lg rounded-pill border border-black' 
                            style={{'width': '7rem'}}
                            data-bs-toggle="modal" data-bs-target={`#${id}deleteReviewModal`}
                        >Delete</button>
                    </div>
                </div>
            </div>

                                        {/* EDIT REVIEW MODAL */}

            <div className="modal fade" id={`${id}editReviewModal`} tabIndex="-1" aria-labelledby={`${id}editReviewModalLabel`} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={`${id}editReviewModalLabel`}>{`Edit ${name} Review`}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='bg-white p-3'>
                                <form id={`edit-review-form-${id}`} onSubmit={formik.handleSubmit}>

                                                    {/* Name */}
                                    <div className="mb-0 row m-0">
                                        <label className="col fs-5">Name</label>
                                    </div>
                                    <div className="mb-3 row m-0">
                                        <div className="col">             
                                            <input
                                            className="form-control col-sm-6 shadow-sm border-black border-3" 
                                            type="text"
                                            name="name"
                                            placeholder="Reviewer's Name"
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                            required/>
                                        </div>
                                    </div>

                                                    {/* Title */}
                                    <div className="mb-0 row m-0">
                                        <label className="col fs-5">Title</label>
                                    </div>
                                    <div className="mb-3 row m-0">
                                        <div className="col">             
                                            <input
                                            className="form-control col-sm-6 shadow-sm border-black border-3" 
                                            type="text"
                                            name="title"
                                            placeholder="Reviewer's Title"
                                            value={formik.values.title}
                                            onChange={formik.handleChange}
                                            required/>
                                        </div>
                                    </div>

                                                    {/* Body */}
                                    <div className="mb-0 row m-0">
                                        <label className="col fs-5">Review</label>
                                    </div>
                                    <div className="mb-3 row m-0">
                                        <div className="col">             
                                            <textarea
                                            className="form-control col-sm-6 shadow-sm border-black border-3" 
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
                                    <div className="mb-0 row m-0">
                                        <label className="col fs-5">Image Link</label>
                                    </div>
                                    <div className="mb-3 row m-0">
                                        <div className="col">             
                                            <input
                                            className="form-control col-sm-6 shadow-sm border-black border-3" 
                                            type="text"
                                            name="image"
                                            placeholder="Reviewer Image Link"
                                            value={formik.values.image}
                                            onChange={formik.handleChange}
                                            required/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" className="btn btn-primary" form={`edit-review-form-${id}`} data-bs-dismiss="modal">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

                                {/* DELELTE REVIEW MODAL */}

            <div className="modal fade" id={`${id}deleteReviewModal`} tabIndex="-1" aria-labelledby={`${id}deleteReviewModalLabel`} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={`${id}deleteReviewModalLabel`}>Confirm Delete</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    <div className="modal-body">
                        {`Delete review by ${name} ?`}
                    </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AdminReviewCard