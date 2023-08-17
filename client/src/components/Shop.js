
import { useEffect, useState } from 'react'
// import product_placeholder from '../assets/product_placeholder_og.jpg'

function Shop() {

    const [productArray, setProductArray] = useState([])

    useEffect(()=>{
        fetch('/products')
        .then(r=>r.json())
        .then(products => setProductArray(products)) 
    }, [])

    if (productArray.length > 0){
        console.log(productArray[0].image)
    }
    
    
    return(
        <div>
            <h1>Shop Page</h1>
            {(productArray.length > 0) ? <img src={require('../assets/product_placeholder_og.jpg')}/> : null}
        </div>
    )
}

export default Shop