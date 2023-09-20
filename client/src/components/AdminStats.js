import { useEffect, useState } from "react"

function AdminStats(){
    const [orderNums, setOrderNums] = useState({})

    useEffect(()=>{
        fetch('/preordersstats')
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
                    <td>Mark</td>
                    <td>Otto</td>

                    </tr>
                    <tr>
                    <th scope="row">theNextBigThing Pro</th>
                    <td>Jacob</td>
                    <td>Thornton</td>

                    </tr>
                    <tr>
                    <th scope="row">theNextBigThing Lite</th>
                    <td colspan="2">Larry the Bird</td>

                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AdminStats