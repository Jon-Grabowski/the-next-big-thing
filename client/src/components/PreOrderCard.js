import { useState } from "react"

function PreOrderCard({order, fetchUser}) {

    const {id, confirm_num, product} = order
    const [deleteTrigger, setDeleteTrigger] = useState(false)

    function handleDelete() {
        fetch(`/preorders/${id}`, {
            method: 'DELETE',
        }).then(r => {
            if (r.ok) {
                console.log('DELETED!')
                fetchUser()
            } else {
                console.log('handle errors!')
            }
        })
    }

    function handleClick() {
        setDeleteTrigger(!deleteTrigger)
    }

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
                <div className='border'>
                    <p className="card-text h6">Confirmation Number: {confirm_num}</p>
                    {deleteTrigger ?
                    <div>
                        <button className="" onClick={handleClick}>Cancel</button>
                        <button className="" onClick={handleDelete}>Confirm Delete</button>
                    </div>
                    :<button className="" onClick={handleClick}>Delete Pre-Order</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default PreOrderCard