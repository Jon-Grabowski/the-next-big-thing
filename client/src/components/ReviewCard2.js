
function ReviewCard2({review}) {
    const {name, title, body, image} = review

    return(
        <div className='d-flex justify-content-around my-5 align-items-center p-3 bg-white bg-opacity-75 text-dark border-top border-bottom border-3 border-black rounded'>
            <figure>
                <blockquote className="blockquote">
                    <p>"{body}"</p>
                </blockquote>
                <figcaption className="blockquote-footer fs-5">
                    {name}, <cite title="Source Title">{title}</cite>
                </figcaption>
            </figure>
            <div>
                <img
                    src={image}
                    alt={name}
                    className='rounded-circle img-thumbnail'
                    style = {{'maxWidth': '10rem'}}
                />
            </div>
        </div>
    )
}

export default ReviewCard2