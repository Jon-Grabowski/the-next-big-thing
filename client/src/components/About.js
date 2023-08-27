
function About() {
    return(
        <div className='container-lg text-light'>
            <h1>About Page</h1>
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
                <div className='align-middle'>
                    <p className='p-2 lead text-center fs-3'>
                        <span classaName=''>The visionary mind behind theNextBigThing is an enigmatic figure who has etched an indelible mark on the tapestry of innovation. Emerging from the crossroads of brilliance and determination, their journey is a symphony of curiosity and relentless pursuit of the unknown. With a background steeped in multidisciplinary mastery, this inventor's life story reads like a mosaic of unconventional experiences and intellectual conquests.</span>
                    </p>
                </div>
                    
                <div>

                </div>
            </div>
            <div className='bg-black bg-opacity-50 fs-5 p-4 border-bottom border-4 rounded-bottom'>
                <p>
                    From the earliest days, they displayed an uncanny knack for weaving together disparate threads of thought, transforming fragments of insight into the seeds of groundbreaking ideas. A background that spans across diverse realms – from quantum physics to esoteric art forms – granted them a unique vantage point from which to perceive unexplored possibilities.
                    It was during an ethereal moment of serendipity that the spark of theNextBigThing was ignited. An encounter that defied the boundaries of conventional wisdom led to an epiphany that rippled through their consciousness, setting the course for an extraordinary creation. Fuelled by an insatiable curiosity and a desire to reshape the fabric of reality itself, they embarked on a clandestine journey to materialize their vision.
                    Through countless sleepless nights and countless iterations, the inventor harnessed the arcane forces of innovation to sculpt theNextBigThing into existence. Guided by an innate connection to the pulse of tomorrow, they forged a path through uncharted territories of possibility. As the world waits with bated breath to uncover the shroud of secrecy, the inventor's legacy stands as a testament to the power of audacious dreams and the untamed spirit of exploration.
                </p>
            </div>
        </div>
    )
}

export default About