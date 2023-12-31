import { useEffect, useState } from "react"


function AdminStats(){
    const [orderNums, setOrderNums] = useState({})
    

    useEffect(()=>{
        fetch('/preordersstats').then(r => {if (r.ok) {
            r.json().then(stats => setOrderNums(stats))
        }})
    }, [])
    
    const totalPreOrders = orderNums.og_preorders + orderNums.lite_preorders + orderNums.pro_preorders
    const totalRevenue = orderNums.og_preorders*1500 + orderNums.lite_preorders*950 + orderNums.pro_preorders*2200
    
    return (
        <div>
            <h2>Statistics</h2>
            <table className="table fs-3 border border-4 border-black">
                <thead>
                    <tr className='text-white'>
                    <th scope="col" className='display-6 bg-black text-white'>Model</th>
                    <th scope="col" className='display-6 bg-black text-white text-center'>Pre-Orders</th>
                    <th scope="col" className='display-6 bg-black text-white text-center'>Projected Revenue</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">theNextBigThing</th>
                    <td className='text-center'>{orderNums.og_preorders}</td>
                    <td className='text-center'>${orderNums.og_preorders * 1500}</td>
                    </tr>

                    <tr>
                    <th scope="row">theNextBigThing Pro</th>
                    <td className='text-center'>{orderNums.pro_preorders}</td>
                    <td className='text-center'>${orderNums.pro_preorders*2200}</td>
                    </tr>

                    <tr>
                    <th scope="row">theNextBigThing Lite</th>
                    <td className='text-center'>{orderNums.lite_preorders}</td>
                    <td className='text-center'>${orderNums.lite_preorders*950}</td>
                    </tr>

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