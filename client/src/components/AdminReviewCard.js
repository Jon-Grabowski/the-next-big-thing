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
                    <img src={image} alt={name} style={{'height': "9rem"}} className='me-4'/>
                    <p>{body}</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AdminReviewCard