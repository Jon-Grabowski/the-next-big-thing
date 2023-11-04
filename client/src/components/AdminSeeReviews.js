import AdminReviewCard from "./AdminReviewCard"

function AdminSeeReviews({reviews, setReviews}){

    const reviewCards = reviews.map((review) => {
        return <AdminReviewCard key = {review.id} currReview={review} setReviews={setReviews} reviewsArray={reviews}/>
    })

    return(
        <div className='accordion border rounded border-light border-4' id="reviewAccordion" >
            {reviewCards}
        </div>
    )
}

export default AdminSeeReviews