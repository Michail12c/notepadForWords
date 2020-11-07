import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
  let settings = {
    fade: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  let content = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="wrapper-slider">
      <Slider {...settings}>
      {content.map(item => (
        <div className="section-slider"><h3>{item}</h3></div>
      ))}
      </Slider>
    </div>

  );
}

const FreeLesson = () => {
  return (
   <div className="free-lesson">
     <SimpleSlider/>
   </div>
  );
}

export default FreeLesson;