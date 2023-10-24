import { useState, useEffect } from "react"
import AdminReviewCard from "./AdminReviewCard"

function AdminSeeReviews({reviews, setReviews}){

    // const[reviews, setReviews] = useState(reviewsArray)

    const reviewCards = reviews.map((review) => {
        return <AdminReviewCard key = {review.id} currReview={review} setReviews={setReviews} reviewsArray={reviews}/>
    })

    return(
        <div className='accordion' id="reviewAccordion" >
            {reviewCards}
        </div>
    )
}

export default AdminSeeReviews