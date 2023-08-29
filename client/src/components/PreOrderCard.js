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
        <div className="card mb-3 text-light bg-primary rounded w-75 mx-auto">
            <div className='card-body p-1 bg-primary rounded'>
                <div className="row g-0">
                    <div className="col-lg-7 bg-black p-2 d-flex justify-content-between">
                        <div className='mt-5'>
                            <p className="card-title display-6 ms-4 p-2 h-75">{product.name}</p>
                            <p className="card-text h6">Confirmation Number: {confirm_num}</p>
                        </div>
                        <div className='mt-5    '>
                            <p className="card-text h3 h-50 ms-3 p-2 pt-4">${product.price}</p>
                            {deleteTrigger ?
                            <div>
                                <button className="btn btn-secondary me-1" onClick={handleClick}>Cancel</button>
                                <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                            </div>
                            :<button className="btn btn-danger" onClick={handleClick}>Delete Pre-Order</button>
                            }
                        </div>
                    </div>
                    <div className="col-lg-5 bg-black p-2">
                        <img className="card-img-end preorder-card-img float-lg-end" src={product.image} alt={product.name}/>
                    </div>
                </div>
                <div className='bg-black'>
                    
                </div>
            </div>
        </div>

        // <div className="card mb-3 text-light bg-primary rounded">
        //     <div className='card-body p-1 bg-primary rounded'>
        //         <div className="row g-0">
        //             <div className="col-lg-6 bg-black p-2 d-flex align-items-center">
        //                 <p className="card-title display-6 ms-4 p-2">{product.name}</p>
        //                 <p className="card-text h4 ms-3 p-2">${product.price}</p>
        //             </div>
        //             <div className="col-lg-6 bg-black p-2">
        //                 <img className="card-img-end preorder-card-img float-lg-end" src={product.image} alt={product.name}/>
        //             </div>
        //         </div>
        //         <div className='bg-black'>
        //             <p className="card-text h6">Confirmation Number: {confirm_num}</p>
        //             {deleteTrigger ?
        //             <div>
        //                 <button className="" onClick={handleClick}>Cancel</button>
        //                 <button className="" onClick={handleDelete}>Confirm Delete</button>
        //             </div>
        //             :<button className="" onClick={handleClick}>Delete Pre-Order</button>
        //             }
        //         </div>
        //     </div>
        // </div>
    )
}

export default PreOrderCard