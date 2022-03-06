import React from 'react';

const Image = ({ img, src, alt, width, height, className }) => {
  return (
    <img
      className={className}
      src={
        img
          ? src
          : 'https://http2.mlstatic.com/D_NQ_NP_2X_757023-MLA48945689799_012022-F.webp'
      }
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default Image;
