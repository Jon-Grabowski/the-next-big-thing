import { useFormik } from "formik";

function AdminAddProduct(){

    function addProduct(newProduct) {
        console.log(newProduct)
    }
    const formik = useFormik({
        initialValues: {
            name: "",
            price:"",
            description: "",
            image:"",
            specs:"",
        },
        onSubmit: (productInfo) => {addProduct(productInfo)}
        });

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
                <div className="mb-3 row m-0">
                    <div className="col">             
                        <input
                        className="form-control col-sm-6 shadow-sm border-black border-3" 
                        type="text"
                        name="specs"
                        placeholder="Specs"
                        value={formik.values.specs}
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

export default AdminAddProduct