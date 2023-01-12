import React from 'react'

const   Carousel = () => {
  return (
    <div className='col-lg-12 col-md-12 col-sm-12'><div id="carouselExampleFade" class="carousel slide carousel-fade ">
    <div class="carousel-inner d-flex">
      <div  class="top-carousel carousel-item active">
        <div className='bg-carousel1'></div>
        <img className='img3 d-blok w-100' src="https://www.indiependent.co.uk/wp-content/uploads/2019/08/handshaw.jpg" alt="..."></img>
      </div>
      <div  class="top-carousel carousel-item ">
        <div className='bg-carousel2'></div>
        <img className='img1 d-blok w-100' src="https://whatkeptmeup.com/wp-content/uploads/2022/01/wp-1642251160709.jpg"  alt="..."></img>
      </div>
      <div  class="top-carousel carousel-item ">
        <div className='bg-carousel3'></div>
        <img className='img2 d-blok w-100' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lead-image-movie-tv-show-templates2-03-1656022265.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*" alt="..."></img>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div></div>
  )
}

export default Carousel