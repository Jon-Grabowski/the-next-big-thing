import { useEffect, useState } from "react"
import ReviewCard1 from "./ReviewCard1"
import ReviewCard2 from "./ReviewCard2"

function Reviews() {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('/reviews')
        .then(r => r.json())
        .then(reviewArray => setReviews(reviewArray))
    }, [])

    let trigger = 0
    const reviewCards = reviews.map((review) => {
        if (trigger % 2 === 0) {
            trigger++
            return <ReviewCard1 key={review.id} review={review} />
        }else {
            trigger++
            return <ReviewCard2 key={review.id} review={review} />
        }
    })

    return(
        
        <div>
            <div className='d-flex container-fluid bg-black justify-content-center'>
                <img 
                    src='../assets/thenextbigthing-high-resolution-logo-color-on-transparent-background-cropped.png' 
                    alt='logo'
                    className='bg-black py-2'
                    style={{'maxWidth': '40rem'}}
                />
            </div>
            <div className='container-fluid mt-4 text-light text-center border-top border-bottom rounded bg-black bg-opacity-50' style={{'maxWidth': '70rem'}}>
                    <p className='display-6 py-4'><strong>Voices of Vision: Early Access Reviews of theNextBigThing</strong></p>
                    <p className='fs-5 px-5'><em>Discover what renowned figures from diverse domains are saying about their exclusive encounters with theNextBigThing</em></p>
            </div>
            <div className='container-lg text-light'>
                {reviewCards}
            </div>
        </div>
    )
}

export default Reviews