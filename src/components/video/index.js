import React from 'react';

const Video = ({ id, name, width = 560, height = 315 }) => (
  <iframe
    width={width}
    height={height}
    src={`https://www.youtube.com/embed/${id}`}
    title={name}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
);

export default Video;
