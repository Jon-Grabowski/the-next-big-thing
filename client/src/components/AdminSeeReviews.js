import { useState, useEffect } from "react"
import AdminReviewCard from "./AdminReviewCard"

function AdminSeeReviews(){

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('/reviews')
        .then(r => r.json())
        .then(reviewArray => setReviews(reviewArray))
    }, [])

    const reviewCards = reviews.map((review) => {
        return <AdminReviewCard key = {review.id} review={review} />
    })

    return(
        <div className='accordion' id="reviewAccordion" >
            {reviewCards}
        </div>
    )
}

export default AdminSeeReviews