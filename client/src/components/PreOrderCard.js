
function PreOrderCard({order}) {
    console.log(order)
    const {id, confirm_num, product} = order
    return(
        <div className="card w-75 mb-3">
            <div className='card-body'>
                <div className="row g-0 border">
                    <div className="col-md-9">
                        <p className="card-title h3">{product.name}</p>
                        <p className="card-text h6">{product.price}</p>
                    </div>
                    <div className="col-md-3">
                        <img className="card-img-end preorder-card-img" src={product.image} alt={product.name}/>
                    </div>
                </div>
                <p className="card-text h6">Confirmation Number: {confirm_num}</p>
                
            </div>
        </div>
    )
}

export default PreOrderCard