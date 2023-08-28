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
        <div className='container-lg text-light'>
            <h1>Reviews Page</h1>
            {reviewCards}
            {/* <div className='d-flex justify-content-around my-5 align-items-center'>
                <div>
                    <img
                        src='https://pyxis.nymag.com/v1/imgs/d78/db3/e1663ff2983e9b999de28e63e35c7ae4db-29-dr-dre.rsquare.w330.jpg'
                        alt=''
                        className='rounded-circle float-start img-thumbnail'
                        // style = {{'max-width': '10rem'}}
                    />
                </div>
                <figure className="text-end">
                    <blockquote className="blockquote">
                        <p>"theNextBigThing is a symphony of innovation that harmonizes seamlessly with our evolving world. It's a melody of untapped possibilities that will undoubtedly set the tone for the future of technology."</p>
                    </blockquote>
                    <figcaption className="blockquote-footer fs-5">
                        Dr.Dre,  <cite title="Source Title">producer/rapper</cite>
                    </figcaption>
                </figure>
            </div> */}

            {/* <div className='d-flex justify-content-around my-5 align-items-center'>
                <figure>
                    <blockquote className="blockquote">
                        <p>"As an actor, I'm drawn to stories that push boundaries, and theNextBigThing is no different. This product is a masterpiece of technology that empowers users to embrace their roles as pioneers of the digital age."</p>
                    </blockquote>
                    <figcaption className="blockquote-footer fs-5 text-black">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                    </figcaption>
                </figure>
                <div>
                    <img
                        src='https://pyxis.nymag.com/v1/imgs/d78/db3/e1663ff2983e9b999de28e63e35c7ae4db-29-dr-dre.rsquare.w330.jpg'
                        alt=''
                        className='rounded-circle img-thumbnail'
                        // style = {{'max-width': '10rem'}}
                    />
                </div>
            </div> */}

        </div>
    )
}

export default Reviews