
function ReviewCard1({review}) {
    const {name, title, body, image} = review

    return(
        <div className='d-flex justify-content-around my-5 align-items-center p-3 bg-white bg-opacity-75 text-dark border-top border-bottom border-3 border-black rounded'>
            <div>
                <img
                    src={image}
                    alt={name}
                    className='rounded-circle float-start img-thumbnail'
                    style = {{'maxWidth': '10rem'}}
                />
            </div>
            <figure className="text-end">
                <blockquote className="blockquote">
                    <p>"{body}"</p>
                </blockquote>
                <figcaption className="blockquote-footer fs-5">
                    {name},  <cite title="Source Title">{title}</cite>
                </figcaption>
            </figure>
        </div>
    )
}

export default ReviewCard1