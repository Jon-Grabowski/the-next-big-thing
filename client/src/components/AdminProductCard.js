
function AdminProductCard({product}) {

    const {id, name, price, description, image, specs} = product

    return (
        <div className="accordion-item p-2" style={{'width': '35rem'}}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${name[0]}${id}`} aria-expanded="false" aria-controls="collapseTwo">
                <strong className='fs-5'>{name},</strong><em className='fs-6 ps-2 '>{price}</em>
            </button>
            </h2>
            <div id={`${name[0]}${id}`} className="accordion-collapse collapse" data-bs-parent="#productAccordion">
                <div className="accordion-body">
                    <div className='d-xl-flex flex-row'>
                        <img src={image} alt={name} style={{'height': "9rem"}} className='me-4 mb-4'/>
                        <p>{description}</p>
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
        </div>
    )
}

export default AdminProductCard