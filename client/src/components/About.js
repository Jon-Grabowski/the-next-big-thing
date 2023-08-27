
function About() {
    return(
        <div className='container-lg text-light'>
            <div className='d-flex align-items-end border-bottom mb-4'>
                <p className='display-4'>Maximillian Veritas</p>
                <p className='lead pb-1'><em>, creator & founder</em></p>
            </div>
            <div className='d-flex align-items-center bg-black bg-opacity-50 pt-4 border-top border-4 rounded-top'>
                <div className='float-start m-2'>
                    <img
                    id = 'founder-image'
                    src='../assets/founder-image.jpg'
                    alt ='Product founder picture'
                    className='rounded float-start'
                    style = {{'max-width': '20rem'}}
                    />
                </div>
                <div className='align-middle border-bottom border-1 mx-3'>
                    <p className='p-2 lead text-center fs-3'>
                        <span classaName=''>Maximillian Veritas, the visionary mind behind theNextBigThing, is an enigmatic figure who has etched an indelible mark on the tapestry of innovation. Emerging from the crossroads of brilliance and determination, his journey is a symphony of curiosity and relentless pursuit of the unknown. With a background steeped in multidisciplinary mastery, Max's life story reads like a mosaic of unconventional experiences and intellectual conquests.</span>
                    </p>
                </div>
                    
                <div>

                </div>
            </div>
            <div className='bg-black bg-opacity-50 fs-5 p-4 border-bottom border-4 rounded-bottom'>
                <p className='px-3'>From the earliest days, Maximillian displayed an uncanny knack for weaving together disparate threads of thought, transforming fragments of insight into the seeds of groundbreaking ideas. A background that spans across diverse realms - from quantum physics to esoteric art forms - granted him a unique vantage point from which to perceive unexplored possibilities.</p>
                <p className='px-3'>It was during an ethereal moment of serendipity that the spark of theNextBigThing was ignited. An encounter that defied the boundaries of conventional wisdom led to an epiphany that rippled through his consciousness, setting the course for an extraordinary creation. Fuelled by an insatiable curiosity and a desire to reshape the fabric of reality itself, Max embarked on a clandestine journey to materialize his vision.</p>
                <p className='px-3'>Through countless sleepless nights and countless iterations, Max harnessed the arcane forces of innovation to sculpt theNextBigThing into existence. Guided by an innate connection to the pulse of tomorrow, he forged a path through uncharted territories of possibility. As the world waits with bated breath for the release of theNextBigThing, Maximillian Veritas' legacy stands as a testament to the power of audacious dreams and the untamed spirit of exploration.</p>
            </div>
        </div>
    )
}

export default About