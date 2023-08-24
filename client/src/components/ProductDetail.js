import { UserContext } from "../context/user";
import { useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min"

function ProductDetail({featureProduct, fetchUser}) {

    const {id, name, price, description, image} = featureProduct
    const {user, setUser} = useContext(UserContext)
    const imgPath = ``

    function handleClick() {
            const data = {
                'user_id': user.id,
                'product_id': id
            }
            fetch('/pre_orders', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    },
                body: JSON.stringify(data)
            }).then((resp) => {
                if (resp.ok) {
                    resp.json().then(() => {
                        fetchUser()
                    });
                } else {
                    console.log("handle errors!!");
                }
            })
    }
    return(
        // <div>
        //     <img src={image} alt={name} className='w-25 rounded shadow'/>
        //     {user ? <button className='btn btn-warning border-3 fw-bold mx-3 border-black' onClick={handleClick}>Place Pre-Order!</button> : null}
        //     <h1>{name}</h1>
        //     <h4>{price}</h4>
        //     <p>{description}</p>           
        // </div>
        <div className='container-lg'>
            <div className="card mb-3 feature-product-card shadow-lg">
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={image} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title display-6">{name}</h5>
                            <p className='card-subtitle text-body-secondary fs-4'>${price}</p>
                            <p className="card-text">{description}</p>
                            {user ? 
                            <button className='btn btn-warning border-3 fw-bold mx-3 border-black' onClick={handleClick}>Place Pre-Order!</button> 
                            : <Link className='btn btn-secondary border-2 fw-bold mx-3 border-black' to='/signup-login'>Log In to PreOrder</Link> }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail