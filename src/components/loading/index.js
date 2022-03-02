import React from 'react';

const Loading = (props) => {
  return (
    <div className="loading-block">
      Cargando
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
