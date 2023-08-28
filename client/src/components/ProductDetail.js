import { UserContext } from "../context/user";
import { useContext, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function ProductDetail({featureProduct, fetchUser}) {

    const {id, name, price, description, image, specs} = featureProduct
    const {user, setUser} = useContext(UserContext)
    const [confirmNum, setConfirmNum] = useState(null)
    const history = useHistory()


    function handleModalClick() {
        history.push('/user')
    }

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
                    resp.json().then((order) => {
                        setConfirmNum(order.confirm_num)
                        fetchUser()
                    });
                } else {
                    console.log("handle errors!!");
                }
            })
    }

    console.log(specs.split('|'))
    const specArray = specs.split('|')
    const specsList = specArray.map((spec) => {
        return <li className='p-1'><strong>{spec}</strong></li>
    })

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
                    <div className="col-md-6 d-flex align-items-center bg-black bg-opacity-75">
                        <img src={image} className="img-fluid rounded-top" alt="..."/>
                    </div>
                    <div className="col-md-6 bg-primary bg-opacity-50">
                        <div className="card-body">
                            <div className='d-flex mb-4 justify-content-between align-items-center'>
                                <h5 className="card-title display-6"><strong>{name}</strong></h5>
                                <p className='card-subtitle text-body-secondary fs-2 pe-4'>${price}</p>
                            </div>
                            <ul>
                                {specsList}
                            </ul>
                            
                        </div>
                    </div>
                </div>
                <div className='row g-0'>
                    <div className='col-md-6 p-3 text-light bg-black bg-opacity-75'>
                        <h4 className='mb-2 border-bottom border-white'>Product Description</h4>
                        <p className="card-text mb-0 fs-5">{description}</p>
                    </div>
                    <div className='col-md-6 text-center d-flex flex-column align-items-center bg-primary bg-opacity-50'>
                        <h4 className='p-3'>We expect theNextBigThing to be in high demand!</h4>
                        <h5 className='pb-4'>Place a preorder to reserve yours!</h5>
                        {user ? 
                            <button 
                                className='btn btn-warning border-3 fw-bold mx-3 p-4 border-black' 
                                onClick={handleClick}
                                data-bs-toggle="modal" data-bs-target="#confirm-preorder-modal">
                                Place Pre-Order!</button> 
                            : <Link className='btn btn-secondary border-2 fw-bold mx-3 p-4 border-black' to='/signup-login'>Log In to PreOrder</Link> }
                        </div>
                </div>
            </div>

                                    {/* MODAL */}
            <div className="modal fade" id="confirm-preorder-modal" tabIndex="-1" aria-labelledby="confirm-preorder-modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">PreOrder Placed!</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h3>{name}</h3>
                            {confirmNum ? <p>{confirmNum}</p> : null}
                            <div className="card w-75 mb-3">
                                <div className='card-body'>
                                    <div className="row g-0 border">
                                        <div className="col-md-9">
                                            <p className="card-title h3">{name}</p>
                                            <p className="card-text h6">{price}</p>
                                        </div>
                                        <div className="col-md-3">
                                            <img className="card-img-end preorder-card-img" src={image} alt={name}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Continue Shopping</button>
                            <button onClick={handleModalClick} type="button" className="btn btn-primary" data-bs-dismiss="modal">View Your PreOrders</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetail