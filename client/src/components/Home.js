

function Home(){
    return(
        <div>
            <div className='container-lg text-center my-5'>
                <img 
                src='../assets/thenextbigthing-high-resolution-logo-color-on-transparent-background.png'
                alt='the-next-big-thing-logo'
                className='w-25'
                />
            </div>
            <div className='container-fluid my-3 w-100 pt-5'>
                <div className='d-flex row justify-content-evenly justify-items-center align-items-center mt-5'>
                    <div className='col-6 m-3'>
                        <img 
                        // src='../assets/product-transparant.png'
                        src='../assets/nbt-display-og.jpg'
                        alt='the-next-big-thing-logo'
                        className='w-100'
                        />
                    </div>
                    {/* <div className='col-1 m-1'></div> */}
                    <div className='col-6 bg-black border border-white border-3 rounded bg-opacity-25 border-end-0 border-start-0 m-3 p-3'>
                        <h5 className='text-light my-3 mb-5'>Introducing...    <span className='display-6 fst-italic fw-semibold'>theNextBigThing</span></h5>
                        <p className='text-light lead fst-italic my-3 text-center'>A true marvel that is set to reshape the way we experience the world. Prepare to embark on a journey into the future of technology, where innovation knows no bounds.</p>
                        <p className='text-light fs-5 my-3 text-center'>Imagine a world where limits are shattered and new horizons are unveiled. With theNextBigThing, you're not just witnessing progress - you're becoming a part of it. This extraordinary product embodies the culmination of relentless research, ingenious engineering, and visionary design.
                        Don't miss out on this chance to be a pioneer in a new era of technology. Join us in shaping the unknown and reimagining what's possible. Together, we're stepping into a realm of endless potential. The future is on the horizon, and theNextBigThing is your ticket to get there.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        // <div className='container-lg text-center mt-5'>
        //     <img 
        //     src='../assets/thenextbigthing-high-resolution-logo-color-on-transparent-background.png'
        //     alt='the-next-big-thing-logo'
        //     className='w-50'
        //     />
        //     <p className='display-5 mt-5'>Home Page Under Construction</p>
        // </div>
    )
}

export default Home