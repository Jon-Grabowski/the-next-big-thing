
function ProductCard({product}){
    if (product != undefined) {
        const {id, name, price, description, image} = product
        return (
            <div className="card" style={{width: '18rem'}}>
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