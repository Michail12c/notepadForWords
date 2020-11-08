import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from 'react-redux';
import { getBaseList } from '../../../redux/actions/lesson';

function SimpleSlider({listWords}) {
  let settings = {
    fade: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="wrapper-slider">
      <Slider {...settings}>
      {listWords && listWords.map(item => (
        <div key={item.word} className="section-slider"><h3>{item.word}</h3></div>
      ))}
      </Slider>
    </div>

  );
}

const FreeLesson = () => {

  const dispatch = useDispatch();
  const baseList = useSelector(state => state.lessonReducer.baseList);
  const { listWords } = baseList;
  console.log(listWords)

   if(!baseList){
    dispatch(getBaseList());
   }


  return (
   <div className="free-lesson">
     <SimpleSlider listWords={listWords}/>
   </div>
  );
}

export default FreeLesson;