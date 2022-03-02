import React from 'react';

const Rating = ({ value, text }) => {
  const ratingValue = value * 10;

  const Circle = () => {
    return (
      <div className="circle-box">
        <div className="progress blue">
          <span className="progress-left">
            <span className="progress-bar"></span>
          </span>
          <span className="progress-right">
            <span className="progress-bar"></span>
          </span>
          <div className="progress-value">{ratingValue}%</div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="rating">
        <Circle />
        {text && <p className="text">{text}</p>}
      </div>
    </>
  );
};

export default Rating;
