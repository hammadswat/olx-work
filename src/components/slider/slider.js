import "./slider.css"
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AutoSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };
//
  return (
    
    <Slider {...sliderSettings}>
      <div className="slider-pic">
        <img src="https://icms-image.slatic.net/images/ims-web/2eace85e-eee3-486b-967b-1da3916e9fc2.jpg" alt="Image 1" />
      </div>
      <div className="slider-pic">
        <img src="https://jacketars.com/wp-content/uploads/2020/08/Mens-Jakcets-Collection.jpg" alt="Image 2" />
      </div>
      <div className="slider-pic">
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/02910227410417.56364b0980c33.jpg" alt="Image 3" />
      </div>
    </Slider>
  );
};

export default AutoSlider;
