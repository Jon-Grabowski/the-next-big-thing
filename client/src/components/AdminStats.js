import { useEffect, useState } from "react"

function AdminStats(){
    const [orderNums, setOrderNums] = useState({})

    useEffect(()=>{
        fetch('/preordersstats').then(r => {if (r.ok) {
            r.json().then(stats => setOrderNums(stats))
        }})
    }, [])
    
    
    return (
        <div>
            <h2>Statistics</h2>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Model</th>
                    <th scope="col">Pre-Orders</th>
                    <th scope="col">Projected Revenue</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">theNextBigThing</th>
                    <td>{orderNums.og_preorders}</td>
                    <td>Otto</td>

                    </tr>
                    <tr>
                    <th scope="row">theNextBigThing Pro</th>
                    <td>{orderNums.pro_preorders}</td>
                    <td>Thornton</td>

                    </tr>
                    <tr>
                    <th scope="row">theNextBigThing Lite</th>
                    <td colSpan="2">{orderNums.lite_preorders}</td>

                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AdminStats