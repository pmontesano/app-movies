import React from 'react';

const Loading = (props) => {
  return (
    <div className="loading-block">
      Cargando
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
