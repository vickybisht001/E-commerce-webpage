import React from 'react'

export const Carousel = () => {
    return (
        <>
      
            <div id="myCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://preview.colorlib.com/theme/divisima/img/bg.jpg.webp" alt="" className='w-100'/>

                        <div className="container">
                            <div className="carousel-caption text-start">
                                <span>NEW ARRIVALS</span>
                                <h1>DENIM JACKETS</h1>
                                <p className="opacity-75">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, fugit. Nobis repudiandae quos temporibus nostrum tempora eius error quisquam mollitia, eos quidem repellendus laboriosam ducimus iusto sequi laborum exercitationem voluptate.</p>
                                <div className='carousel-btn mt-4'>

                                    <p><a className="btn-first" href="#">DISCOVER</a></p>
                                    <p><a className="btn-second" href="#">ADD TO CART</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">

                        <img src="https://preview.colorlib.com/theme/divisima/img/bg-2.jpg.webp" alt="" className='w-100' />

                        <div className="container">
                            <div className="carousel-caption text-start">
                                <span>NEW ARRIVALS</span>
                                <h1>DENIM JACKETS</h1>
                                <p className="opacity-75">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, fugit. Nobis repudiandae quos temporibus nostrum tempora eius error quisquam mollitia, eos quidem repellendus laboriosam ducimus iusto sequi laborum exercitationem voluptate.</p>
                                <div className='carousel-btn mt-4'>

                                    <p><a className="btn-first" href="#">DISCOVER</a></p>
                                    <p><a className="btn-second" href="#">ADD TO CART</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}
