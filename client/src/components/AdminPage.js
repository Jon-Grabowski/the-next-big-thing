import AdminStats from "./AdminStats"
import AdminAddProduct from "./AdminAddProduct"
import AdminAddReview from "./AdminAddReview"
import { useContext } from "react";
import { UserContext } from "../context/user";

function AdminPage() {
    const { user } = useContext(UserContext)
    if (user && user.admin) {
        return (
            <div className='container-lg'>
                <p className='display-4'>Admin Page</p>
                <div className=''>
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
    } else {
        return <div className='container-lg text-center'><h1>UNAUTHORIZED</h1></div>
    }
}

export default AdminPage