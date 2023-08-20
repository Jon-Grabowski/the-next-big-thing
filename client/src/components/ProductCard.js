
function ProductCard({product, setFeatureProduct}){

    function handleClick(){
        setFeatureProduct(product)
    }

    if (product != undefined) {
        const {id, name, price, description, image} = product
        return (
            <div onClick={handleClick} className="card m-4 product-card">
                <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-text">{name}</h5>
                    <p className="card-text">${price}</p>
                </div>
            </div>
        )
    }
}

export default ProductCard