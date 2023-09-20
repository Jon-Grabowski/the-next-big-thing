import AdminStats from "./AdminStats"
import AdminAddProduct from "./AdminAddProduct"
import AdminAddReview from "./AdminAddReview"

function AdminPage() {
    return (
        <div className='container-lg'>
            <p className='display-4'>Admin Page</p>
            <div className='border'>
                <AdminStats />
            </div>
            <div className='border-top p-5 pb-2 m-5 mb-2'></div>
            <div className='d-flex justify-content-evenly'>
                <div className='border'>
                    <AdminAddProduct />
                </div>
                <div className='border'>
                    <AdminAddReview />
                </div>
            </div>
        </div>
    )
}

export default AdminPage