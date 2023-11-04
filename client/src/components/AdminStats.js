function AdminStats({productArray}){

    let totalRevenue = 0
    let totalPreOrders = 0
    
    const productRows = productArray.map( product => {
        totalRevenue+=product.price
        totalPreOrders+=product.orders.length
        return (
            <tr key={product.id}>
                <th scope="row">{product.name}</th>
                <td className='text-center'>{product.orders.length}</td>
                <td className='text-center'>${product.orders.length*product.price}</td>
            </tr>
        )
    })

    return (
        <div>
            <h2>Statistics</h2>
            <table className="table fs-3 border border-4 border-black">
                <thead>
                    <tr className='text-white'>
                    <th scope="col" className='display-6 bg-black text-white'>Product</th>
                    <th scope="col" className='display-6 bg-black text-white text-center'>Pre-Orders</th>
                    <th scope="col" className='display-6 bg-black text-white text-center'>Projected Revenue</th>
                    </tr>
                </thead>
                <tbody>

                    {productRows}
                    
                    <tr className='border-top border-5 border-black'>
                    <th scope="row">TOTAL</th>
                    <td className='text-center'>{totalPreOrders}</td>
                    <td className='text-center'>${totalRevenue}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default AdminStats