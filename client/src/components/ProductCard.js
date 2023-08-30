
function ProductCard({product, setFeatureProduct}){

    function handleClick(){
        setFeatureProduct(product)
        window.scrollTo({ top: 0, left: 0})
    }

    if (product !== undefined) {
        const { name, image } = product
        return (
            <div onClick={handleClick} className="card m-4 product-card rounded shadow">
                <img src={image} className="card-img-top rounded" alt="..."/>
                <div className="card-body">
                    <h5 className="card-text fs-4">{name}</h5>
                </div>
            </div>
        )
    }
}

export default ProductCard