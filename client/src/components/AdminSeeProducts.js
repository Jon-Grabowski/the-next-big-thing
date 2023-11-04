import AdminProductCard from "./AdminProductCard"

function AdminSeeProducts({productArray, setProductArray}) {

    const productCards = productArray.map((product) => {
        return <AdminProductCard key={product.id} product={product} productArray={productArray} setProductArray={setProductArray}/>
    })

    return (
        <div className='accordion border rounded border-light border-4' id="productAccordion">
            {productCards}
        </div>
    )
}

export default AdminSeeProducts