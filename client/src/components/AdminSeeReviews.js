import { useState, useEffect } from "react"
import AdminReviewCard from "./AdminReviewCard"

function AdminSeeReviews({reviews}){

    const reviewCards = reviews.map((review) => {
        return <AdminReviewCard key = {review.id} currReview={review} />
    })

    return(
        <div className='accordion' id="reviewAccordion" >
            {reviewCards}
        </div>
    )
}

export default AdminSeeReviews