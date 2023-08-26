
import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import ProductDetail from './ProductDetail'

function Shop({productArray, fetchUser}) {
    const [featureProduct, setFeatureProduct] = useState(null)

    if (productArray.length > 0 && featureProduct) {

        const cardProducts = productArray.map(product => {
            if (product.id !== featureProduct.id) {
                return <ProductCard 
                    key={product.id} 
                    product ={product} 
                    setFeatureProduct={setFeatureProduct}
                    />
            }
        })
    
        return(
            <div>
                <div className='container-lg'>
                    <h1 className='display-4 mt-5 mb-5 border-bottom border-3 border-black'>Place PreOrder</h1>
                </div>
                <ProductDetail featureProduct={featureProduct} fetchUser={fetchUser}/>
                <div className='card-group container-md'>
                    {cardProducts}
                </div>
            </div>
            
        )
    }else if (productArray.length > 0) {
        setFeatureProduct(productArray[0])
    }
}

export default Shop