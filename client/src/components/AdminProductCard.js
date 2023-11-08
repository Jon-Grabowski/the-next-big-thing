import { useFormik } from "formik";
import { useState } from "react";

function AdminProductCard({product, setProductArray, productArray}) {

    const {id, name, price, description, image, specs} = product
    const specArray = specs.split('|');
    const specsList = specArray.map((spec) => {
        return <li key={specArray.indexOf(spec)} className='p-2'>{spec}</li>
    });

    const [specLines, setSpecLines] = useState(specsList.length)
    let specInputs = []


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

    const initialValues = {
        name: name,
        price: price,
        description: description,
        image: image
    }

    console.log(initialValues)

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {console.log(values)},
    })

    for (let i = 0; i < specLines; i++) {
        const currSpec = `spec${i+1}`
        const specBody = specArray[i]
        initialValues[currSpec] = specBody
        specInputs.push(
            <div className="mb-3 row m-0" key={currSpec}>
                    <div className="col">             
                        <input
                        className="form-control col-sm-6 shadow-sm border-black border-3" 
                        type="text"
                        name={currSpec}
                        // placeholder={specArray[i]}
                        value={formik.values.currSpec}
                        onChange={formik.handleChange}
                        required/>
                    </div>
        </div>
        )
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

            <div className="modal fade" id={`${id}editProductModal`} tabIndex="-1" aria-labelledby={`${id}editProductModalLabel`} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={`${id}editProductModalLabel`}>{`Edit ${name}`}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='bg-white p-3'>
                                <form id={`edit-product-form-${id}`} onSubmit={formik.handleSubmit}>

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
                                            placeholder="Product Name"
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                            required/>
                                        </div>
                                    </div>

                                                    {/* Price*/}
                                    <div className="mb-0 row m-0">
                                        <label className="col fs-5">Price</label>
                                    </div>
                                    <div className="mb-3 row m-0">
                                        <div className="col">             
                                            <input
                                            className="form-control col-sm-6 shadow-sm border-black border-3" 
                                            type="text"
                                            name="title"
                                            placeholder="Price"
                                            value={formik.values.price}
                                            onChange={formik.handleChange}
                                            required/>
                                        </div>
                                    </div>

                                                    {/* Description */}
                                    <div className="mb-0 row m-0">
                                        <label className="col fs-5">Prodcut Description</label>
                                    </div>
                                    <div className="mb-3 row m-0">
                                        <div className="col">             
                                            <textarea
                                            className="form-control col-sm-6 shadow-sm border-black border-3" 
                                            type="text"
                                            name="body"
                                            placeholder="Description..."
                                            rows='10'
                                            cols="50"
                                            value={formik.values.description}
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
                                            placeholder="Product Image Link"
                                            value={formik.values.image}
                                            onChange={formik.handleChange}
                                            required/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                                                    {/* Specs */}

                        {specInputs}

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" className="btn btn-primary" form={`edit-product-form-${id}`} data-bs-dismiss="modal">Save changes</button>
                        </div>
                    </div>
                </div>
            </div> 



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