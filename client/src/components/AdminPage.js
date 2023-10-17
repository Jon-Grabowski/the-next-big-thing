import AdminStats from "./AdminStats"
import AdminAddProduct from "./AdminAddProduct"
import AdminAddReview from "./AdminAddReview"
import AdminSeeReviews from "./AdminSeeReviews";
import { useContext, useState } from "react";
import { UserContext } from "../context/user";

function AdminPage() {
    const { user } = useContext(UserContext)
    const [reviewPage, setReviewPage] = useState(true)

    function handleReviewClick(e) {
        if (e.target.id === 'review-page-button') {
            setReviewPage(true)
        } else {
            setReviewPage(false)
        }
    }

    if (user && user.admin) {
        return (
            <div className='container-lg'>
                <p className='display-4'>Admin Page</p>
                <div className=''>
                    <AdminStats />
                </div>
                <div className='border-top p-5 pb-2 m-5 mb-2'></div>
                <div className='d-flex justify-content-evenly'>
                    <div className='border p-3 m-3'>
                        <AdminAddProduct />
                    </div>
                    <div className='border-top border-bottom border-4 border-black rounded p-3 m-3 bg-white bg-opacity-75 '>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                {reviewPage?
                                <a className="nav-link active" aria-current="page" id='review-page-button' onClick={handleReviewClick}>Reviews</a>
                                :<a className="nav-link" aria-current="page" id='review-page-button' onClick={handleReviewClick}>Reviews</a>}
                                </li>
                            <li className="nav-item">
                                {!reviewPage?
                                <a className="nav-link active" id='review-add-button' active='true' onClick={handleReviewClick}>Add New</a>
                                :<a className="nav-link" id='review-add-button' active='true' onClick={handleReviewClick}>Add New</a>}
                            </li>
                        </ul>
                        {reviewPage ? <AdminSeeReviews /> : <AdminAddReview />}
                    </div>
                </div>
            </div>
        )
    } else {
        return <div className='container-lg text-center'><h1>UNAUTHORIZED</h1></div>
    }
}

export default AdminPage