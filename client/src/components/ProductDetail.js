import { UserContext } from "../context/user";
import { useContext } from "react";

function ProductDetail({featureProduct, fetchUser}) {

    const {id, name, price, description, image} = featureProduct
    const {user, setUser} = useContext(UserContext)

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
        <div>
            <img src={image}/>
            {user ? <button className='btn btn-warning border-3 fw-bold mx-3 border-black' onClick={handleClick}>Place Pre-Order!</button> : null}
            <h1>{name}</h1>
            <h4>{price}</h4>
            <p>{description}</p>           
        </div>
    )
}

export default ProductDetail