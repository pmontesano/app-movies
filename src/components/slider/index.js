import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { SlideImage, StyledSlider } from './slideImage';

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <StyledSlider>
      <ArrowBackIosIcon className="leftArrow" onClick={prevSlide} />
      <ArrowForwardIosIcon className="rightArrow" onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div key={index} className="slider-item">
            {index === current && (
              <div>
                {slide.title}
                <SlideImage src={slide.img} alt="" />
                {slide.rating}
              </div>
            )}
          </div>
        );
      })}
    </StyledSlider>
  );
};

export default Slider;
