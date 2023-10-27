import AdminStats from "./AdminStats"
import AdminAddProduct from "./AdminAddProduct"
import AdminAddReview from "./AdminAddReview"
import AdminSeeReviews from "./AdminSeeReviews";
import AdminSeeProducts from "./AdminSeeProducts";
import { useContext, useState } from "react";
import { UserContext } from "../context/user";

function AdminPage({reviews, setReviews, productArray, setProductArray}) {
    const { user } = useContext(UserContext)
    const [reviewPage, setReviewPage] = useState(true)
    const [productPage, setProductPage] = useState(true)

    function handleReviewClick(e) {
        setReviewPage(!reviewPage)
    }

    function handleProductClick(e) {
        setProductPage(!productPage)
    }

    if (user && user.admin) {
        return (
            <div className='container-lg'>
                <p className='display-4'>Admin Page</p>
                <div className=''>
                    <AdminStats />
                </div>
                <div className='border-top p-5 pb-2 m-5 mb-2'></div>
                <div className='row'>
                    <div className='col-xl-6'>
                        <div 
                            className='border-top border-bottom border-4 border-black rounded p-3 m-3 bg-white bg-opacity-75 w-auto'
                            >
                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                <div className='px-3'>
                                    <p className='display-6'><strong>Products</strong></p>
                                </div>
                                <div className='px-3'>
                                    <button 
                                        id='review-add-button' 
                                        className={productPage ? 'btn btn-success fs-5': 'btn btn-secondary fs-5'} 
                                        onClick={handleProductClick}
                                        >
                                        {productPage ? 'Add New' : 'Discard'}
                                    </button>
                                </div>
                            </div>
                            {productPage? <AdminSeeProducts productArray={productArray} setProductArray={setProductArray}/> : <AdminAddProduct />}
                        </div>
                    </div>
                    <div className='col-xl-6'>
                        <div className='col-xl-6 border-top border-bottom border-4 border-black rounded p-3 m-3 bg-white bg-opacity-75 w-auto'>
                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                <div className='px-3'>
                                    <p className='display-6'><strong>Reviews</strong></p>
                                </div>
                                <div className='px-3'>
                                    <button 
                                        id='review-add-button' 
                                        className={reviewPage ? 'btn btn-success fs-5': 'btn btn-secondary fs-5'} 
                                        onClick={handleReviewClick}
                                        >
                                        {reviewPage ? 'Add New' : 'Discard'}
                                    </button>
                                </div>
                            </div>
                            {reviewPage ? <AdminSeeReviews reviews={reviews} setReviews={setReviews}/> : <AdminAddReview reviewsArray={reviews} setReviews={setReviews} setReviewPage={setReviewPage}/>}
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return <div className='container-lg text-center'><h1>UNAUTHORIZED</h1></div>
    }
}

export default AdminPage