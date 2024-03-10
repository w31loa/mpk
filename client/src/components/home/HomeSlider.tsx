import React from 'react'
import Slider from 'react-slick';

const HomeSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (

        <Slider {...settings}>
        <div>
         
        </div>
        <div>
            <img src="/slider/22.webp" className='w-[100%]' alt="" />
            <h3>1</h3>
        </div>
        <div>
            <img src="/slider/33.jpg" className='w-[100%]' alt="" />
            <h3>1</h3>
        </div>
        <div>
            <h3>4</h3>
        </div>
        <div>
            <h3>5</h3>
        </div>
        <div>
            <h3>6</h3>
        </div>
        </Slider>


  )
}

export default HomeSlider