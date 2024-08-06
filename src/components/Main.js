import React, { useState } from 'react';

export const Main = (props) => {

  const images = [
    'https://preview.colorlib.com/theme/divisima/img/product/1.jpg',
    'https://preview.colorlib.com/theme/divisima/img/product/2.jpg',
    'https://preview.colorlib.com/theme/divisima/img/product/3.jpg',
    'https://preview.colorlib.com/theme/divisima/img/product/4.jpg',
    'https://preview.colorlib.com/theme/divisima/img/product/5.jpg',
    'https://preview.colorlib.com/theme/divisima/img/product/6.jpg',
    'https://preview.colorlib.com/theme/divisima/img/product/7.jpg',
    'https://preview.colorlib.com/theme/divisima/img/product/8.jpg',
    'https://preview.colorlib.com/theme/divisima/img/product/9.jpg',

  ];

  // Number of cards to show at a time
  const cardsToShow = 3;
  const totalImages = images.length;

  // State to track current start index
  const [startIndex, setStartIndex] = useState(0);

  // Handle previous button click
  const handlePrev = () => {

    setStartIndex((prevIndex) => (prevIndex === 0 ? totalImages - cardsToShow : prevIndex - cardsToShow));
  };

  // Handle next button click
  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + cardsToShow >= totalImages ? 0 : prevIndex + cardsToShow));
  
  }



  // Slice the images array to display only the current set of images
  const visibleImages = images.slice(startIndex, startIndex + cardsToShow);

  return (
    <>
      <h1 className='text-center my-5 fw-bold fs-2'>{props.heading}</h1>
      <div className="card-container carousel-fade">
        <button className="carousel-button" onClick={handlePrev}><i className='bx bx-chevron-left fs-1'></i></button>
        <div className="carousel-wrapper carousel slide carousel-fade" data-bs-ride="carousel">
          {visibleImages.map((image, index) => (
            <div key={index} className="carousel-card">
              <div className='d-flex gap-5 justify-content-evenly'>

                <h1>Flamboyant Pink Top</h1>
                <p className='fw-bold'>$45.00</p>
              </div>
              <img src={image} alt={`Slide ${startIndex + index + 1}`} />




            </div>
          ))}
        </div>
        <button className="carousel-button" onClick={handleNext}><i className='bx bx-chevron-right fs-1'></i></button>
      </div>
      <div className='selling-product'>

        <h1>BROWSE TOP SELLING PRODUCTS</h1>

        <div className='product-item'>
          <ul>
            <li><a href="/">TOPS</a></li>
            <li><a href="/">JUMPSUITS</a></li>
            <li><a href="/">LINGERIE</a></li>
            <li><a href="/">JEANS</a></li>
            <li><a href="/">DRESSES</a></li>
            <li><a href="/">COATS</a></li>
            <li><a href="/">JUMPERS</a></li>
            <li><a href="/">LEGGINGS</a></li>
          </ul>

        </div>
        <div className='product-img'>
          <div>
            <img src="https://preview.colorlib.com/theme/divisima/img/product/5.jpg.webp" alt="" />
            <div className='pi-icons'>
              <a href="/"><i className='bx bx-cart'></i></a>
              <a href="/"><i className='bx bx-heart'></i></a>
            </div>
            <div className='d-flex gap-5'>
              <h6>Flamboyant Pink Top</h6>
              <p className='fw-bold'>$35.00</p>
            </div>
          </div>
          <div>
            <img src="https://preview.colorlib.com/theme/divisima/img/product/6.jpg.webp" alt="" />
            <div className='pi-icons'>
              <a href="/"><i className='bx bx-cart'></i></a>
              <a href="/"><i className='bx bx-heart'></i></a>
            </div>

            <div className='d-flex gap-5'>
              <h6>Black and White Stripes Dress</h6>
              <p className='fw-bold'>$35.00</p>
            </div>

          </div>
          <div>
            <img src="https://preview.colorlib.com/theme/divisima/img/product/7.jpg.webp" alt="" />
            <div className='pi-icons'>
              <a href="/"><i className='bx bx-cart'></i></a>
              <a href="/"><i className='bx bx-heart'></i></a>
            </div>
            <div className='d-flex gap-5'>
              <h6>Flamboyant Pink Top</h6>
              <p className='fw-bold'>$35.00</p>
            </div>

          </div>
          <div>
            <img src="https://preview.colorlib.com/theme/divisima/img/product/8.jpg.webp" alt="" />
            <div className='pi-icons'>
              <a href="/"><i className='bx bx-cart'></i></a>
              <a href="/"><i className='bx bx-heart'></i></a>
            </div>
            <div className='d-flex gap-5'>
              <h6>Flamboyant Pink Top</h6>
              <p className='fw-bold'>$35.00</p>
            </div>

          </div>
          <div>
            <img src="https://preview.colorlib.com/theme/divisima/img/product/9.jpg.webp" alt="" />
            <div className='pi-icons'>
              <a href="/"><i className='bx bx-cart'></i></a>
              <a href="/"><i className='bx bx-heart'></i></a>
            </div>
            <div className='d-flex gap-5'>
              <h6>Flamboyant Pink Top</h6>
              <p className='fw-bold'>$35.00</p>
            </div>

          </div>
          <div>
            <img src="https://preview.colorlib.com/theme/divisima/img/product/10.jpg.webp" alt="" />
            <div className='pi-icons'>
              <a href="/"><i className='bx bx-cart'></i></a>
              <a href="/"><i className='bx bx-heart'></i></a>
            </div>
            <div className='d-flex gap-5'>
              <h6>Black and White Stripes Dress</h6>
              <p className='fw-bold'>$35.00</p>
            </div>

          </div>
          <div>
            <img src="https://preview.colorlib.com/theme/divisima/img/product/11.jpg.webp" alt="" />
            <div className='pi-icons'>
              <a href="/"><i className='bx bx-cart'></i></a>
              <a href="/"><i className='bx bx-heart'></i></a>
            </div>
            <div className='d-flex gap-5'>
              <h6>Flamboyant Pink Top</h6>
              <p className='fw-bold'>$35.00</p>
            </div>

          </div>
          <div>
            <img src="https://preview.colorlib.com/theme/divisima/img/product/12.jpg.webp" alt="" />
            <div className='pi-icons'>
              <a href="/"><i className='bx bx-cart'></i></a>
              <a href="/"><i className='bx bx-heart'></i></a>
            </div>
            <div className='d-flex gap-5'>
              <h6>Flamboyant Pink Top</h6>
              <p className='fw-bold'>$35.00</p>
            </div>
          </div>
        </div>
        <div className='pi-btn'>
          <button><a href="/">LOAD MORE</a></button>
        </div>
      </div>
      <div className="container">

      <div className='banner'>
        <div className='tag-new'>
          NEW

        </div>
        <h1>NEW ARRIVALS</h1>
        <p>STRIPED SHIRTS</p>
        <button><a href="/">SHOP NOW</a></button>
      </div>


      </div>
    </>
  );
};



