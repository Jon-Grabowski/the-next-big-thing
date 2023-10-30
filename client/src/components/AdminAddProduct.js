import { useFormik } from "formik";
import { useState } from "react";

function AdminAddProduct(){

    const [specLines, setSpecLines] = useState(3)
    const specInputs = []


    function addProduct(newProduct) {
        console.log(newProduct)
    }

    function addSpecLine() {
        setSpecLines(specLines + 1)
    }

    function deleteSpecLine() {
        setSpecLines(specLines - 1)
    }

    const initialValues = {
        name: "",
        price:"",
        description: "",
        image:""
    }
    const formik = useFormik({
        initialValues,
        onSubmit: (productInfo) => {addProduct(productInfo)}
        });

    for (let i = 0; i < specLines; i++) {
        const currSpec = `spec${i+1}`
        initialValues[currSpec] = ''
        specInputs.push(
            <div className="mb-3 row m-0">
                    <div className="col">             
                        <input
                        className="form-control col-sm-6 shadow-sm border-black border-3" 
                        type="text"
                        name={`spec${i+1}`}
                        placeholder={`Spec ${i+1}`}
                        value={formik.values.currSpec}
                        onChange={formik.handleChange}
                        required/>
                    </div>
        </div>
        )
    }
    
    return (
        <div className='bg-white p-3'>
            <h2>Add Product</h2>
            <form onSubmit={formik.handleSubmit}>

                                {/* Name */}
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

                                {/* Price */}
                <div className="mb-3 row m-0">
                    <div className="col">             
                        <input
                        className="form-control col-sm-6 shadow-sm border-black border-3" 
                        type="text"
                        name="price"
                        placeholder="Product price"
                        value={formik.values.price}
                        onChange={formik.handleChange}
                        required/>
                    </div>
                </div>

                                {/* Description */}
                <div className="mb-3 row m-0">
                    <div className="col">             
                        <textarea
                        className="form-control col-sm-6 shadow-sm border-black border-3" 
                        type="text"
                        name="description"
                        placeholder="Product description..."
                        rows='10'
                        cols="50"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        required/>
                    </div>
                </div>

                                {/* Image */}
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

                                {/* Specs */}
                <div>
                    <h3 className='ms-2'>Specs</h3><p>{"(minimum 3)"}</p>
                </div>
                <button className='btn btn-success' onClick={addSpecLine}>+</button>
                {specLines > 3 ? <button className='btn btn-danger' onClick={deleteSpecLine}>-</button>: null}
                {specInputs}

                <div className='text-center mb-4'>
                    <input className='btn btn-success px-3 mb-3' type="submit" value='Add New Product' />
                </div>
            </form>
        </div>
    )
}

export default AdminAddProduct