import { useState } from 'react'

function AdminReviewCard({review}) {
    const {name, title, body, image} = review
    const [cardTrigger, setCardTrigger] = useState(true)

    function handleCardClick() {
        setCardTrigger(!cardTrigger)
    }

    return(
        <div>
            {cardTrigger ?
            <div className="card mb-3" style={{"max-width": "35rem"}} onClick={handleCardClick}>
                <div className="row g-0">
                    <div className="col-md-4 text-center justify-content-center my-4">
                    <img 
                        src={image}
                        alt={name}
                        className='img-thumbnail p-1 bg-black text-center'
                        style = {{'maxWidth': '8rem'}}/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{body}</p>
                        <p className="card-text"><small className="text-body-secondary">{title.toUpperCase()}</small></p>
                    </div>
                    </div>
                </div>
            </div>
            :
            <div className="card mb-3" style={{"max-width": "35rem"}} onClick={handleCardClick}>
                <div className="row g-0">
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{body}</p>
                        <p className="card-text"><small className="text-body-secondary">{title.toUpperCase()}</small></p>
                    </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default AdminReviewCard