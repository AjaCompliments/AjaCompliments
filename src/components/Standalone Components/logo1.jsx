import React from 'react';

const ImageComponent = () => {
  const imageComponentStyle = {
    position: 'absolute',
    width: '9.38vw', /* Converted from 75px */
    height: '9.38vw', /* Converted from 75px */
    left: 'calc(50% - 4.69vw - 0.5px)', /* Converted from calc(50% - 75px/2 - 0.5px) */
    top: '5.83vh', /* Converted from 70px */
    backgroundImage: "url('aja-(1)')",
    backgroundSize: 'cover',
  };

  return (
    <div style={imageComponentStyle}>
        <img src={require("./logo1.png")} style={{"margin-left":"-10vw","margin-top":"20vh",height:"20vh",width:"40vw"}}/>
    </div>
  );
};

export default ImageComponent;
