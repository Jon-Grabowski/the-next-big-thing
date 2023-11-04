
function AdminProductCard({product, setProductArray, productArray}) {

    const {id, name, price, description, image, specs} = product

    const specArray = specs.split('|');
    const specsList = specArray.map((spec) => {
        return <li key={specArray.indexOf(spec)} className='p-2'>{spec}</li>
    });

    function handleDelete() {
        fetch(`/products/${id}`, {
            method: "DELETE"
        }).then(r => {
            if (r.ok) {
                const filteredProducts = productArray.filter(review => review.id !== id)
                setProductArray(filteredProducts)
                alert(`${name} removed.`);
            } else {
                alert('ERROR!')
            }
        })
    }

    return (
        <div className="accordion-item" >
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${name[0]}${id}`} aria-expanded="false" aria-controls="collapseTwo">
                <strong className='fs-4'>{name}</strong>
            </button>
            </h2>
            <div id={`${name[0]}${id}`} className="accordion-collapse collapse" data-bs-parent="#productAccordion">
                <div className="accordion-body">
                    <div className='text-center'><img src={image} alt={name} className='me-4 mb-1 w-75 rounded'/></div>    
                    <div className='text-center'><p className='fs-2'>Price: ${price}</p></div>
                    <div className='text-center mb-2'><em className='border-bottom fs-5'>Description</em></div>
                    <div className='text-center mb-3'>{description}</div>
                    <div className='text-center mb-3'><em className='border-bottom fs-5'>Specs</em></div>
                    <ul>
                        {specsList}
                    </ul>
                    <div className='d-xl-flex flex-row'>
                    
                        
                    </div>
                    <div className='d-xl-flex flex-row justify-content-evenly my-2'>
                        <button 
                            type="button"
                            className='btn btn-warning btn-lg rounded-pill border border-black' 
                            style={{'width': '7rem'}}
                            data-bs-toggle="modal" data-bs-target={`#${id}editProductModal`}
                        >Edit</button>
                        <button 
                            className='btn btn-danger btn-lg rounded-pill border border-black' 
                            style={{'width': '7rem'}}
                            data-bs-toggle="modal" data-bs-target={`#${id}deleteProductModal`}
                        >Delete</button>
                    </div>
                </div>
            </div>

                            {/* TODO: CREATE EDIT PRODUCT MODAL */}
                                {/* EDIT PRODUCT MODAL */}

                                {/* DELELTE PRODUCT MODAL */}

            <div className="modal fade" id={`${id}deleteProductModal`} tabIndex="-1" aria-labelledby={`${id}deleteProductModalLabel`} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={`${id}deleteProductModalLabel`}>Confirm Delete</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    <div className="modal-body">
                        {`Delete ${name}?`}
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

export default AdminProductCard