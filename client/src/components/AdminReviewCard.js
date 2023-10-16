import { useState } from 'react'

function AdminReviewCard({review}) {
    const {id, name, title, body, image} = review
    const [cardTrigger, setCardTrigger] = useState(true)

    function handleCardClick() {
        setCardTrigger(!cardTrigger)
    }

    return(
        <div class="accordion-item p-2" style={{'width': '35rem'}}>
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${name[0]}${id}`} aria-expanded="false" aria-controls="collapseTwo">
                <strong className='fs-5'>{name},</strong><em className='fs-6 ps-2 '>{title}</em>
            </button>
            </h2>
            <div id={`${name[0]}${id}`} class="accordion-collapse collapse" data-bs-parent="#reviewAccordion">
                <div class="accordion-body">
                    <div className='d-xl-flex flex-row'>
                        <img src={image} alt={name} style={{'height': "9rem"}} className='me-4 mb-4'/>
                        <p>{body}</p>
                    </div>
                    <div className='d-xl-flex flex-row justify-content-evenly my-2'>
                        <button 
                            type="button"
                            className='btn btn-warning btn-lg rounded-pill border border-black' 
                            style={{'width': '7rem'}}
                            data-bs-toggle="modal" data-bs-target="#editReviewModal"
                        >Edit</button>
                        <button 
                            className='btn btn-danger btn-lg rounded-pill border border-black' 
                            style={{'width': '7rem'}}
                        >Delete</button>
                    </div>
                </div>
            </div>

                                        {/* EDIT REVIEW MODAL */}

            <div class="modal fade" id="editReviewModal" tabindex="-1" aria-labelledby="editReviewModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="editReviewModalLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default AdminReviewCard