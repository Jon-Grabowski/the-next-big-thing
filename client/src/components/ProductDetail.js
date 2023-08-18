
function ProductDetail({featureProduct}) {
    const {id, name, price, description, image} = featureProduct
    return(
        <div>
            <img src={image}/>
            <h1>{name}</h1>
            <h4>{price}</h4>
            <p>{description}</p>           
        </div>
    )
}

export default ProductDetail