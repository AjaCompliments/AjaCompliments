import React from 'react';

const CardComponent = (props) => {
  const formatPrise = (prise) => {
    const daysOfWeek = ['dim', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam'];
    const formattedDays = [];
  
    for (let i = 0; i < prise.length; i++) {
      if (prise[i] === '1') {
        formattedDays.push(daysOfWeek[i]);
      }
    }
  
    return formattedDays.join(' ');
  };
  return (
    <div
      style={{
        position: 'relative',
        width: '181.73px',
        height: '228px',
        borderRadius: '14.28px',
        background: '#FFFFFF',
        boxShadow: '0px 6.12px 28.56px rgba(19, 44, 74, 0.06)',
        overflow: 'hidden',
      }}
    >
      {/* Teal Rectangle */}
      <div
        style={{
          position: 'absolute',
          width: '152.59px',
          height: '18.51px',
          left: '14.02px',
          top: '135.27px',
          background: '#C2F5EE',
          borderRadius: '6.12px',
        }}
      ></div>
      {/* Text */}
      <div
        style={{
          position: 'absolute',
          width: '137.75px',
          height: '11.78px',
          left: '18.97px',
          top: '138.57px',
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '8px',
          lineHeight: '9px',
          textAlign: 'center',
          color: '#128E8E',
        }}
      >
        temps de prise: {formatPrise(props.prise)}
      </div>
      {/* Magnésium */}
      <div
        style={{
          position: 'absolute',
          width: '108px',
         
          height: '16px',
          left: '14px',
          top: '160px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '16px',
          lineHeight: '19px',
          color: '#2C2C2C',
        }}
      >
        {props.complimentname}
      </div>
      {/* Star */}
      {/* <div
        style={{
          position: 'absolute',
          width: '16.5px',
          height: '16.5px',
          left: '134.45px',
          top: '196.31px',
          background: '#FFC71E',
          borderRadius: '50%',
        }}
      ></div> */}
      {/* Lessons Image */}
      <div
        style={{
          position: 'absolute',
          width: '158.37px',
          height: '117.95px',
          left: '11.55px',
          top: '11.55px',
          backgroundImage: `url(${props.picture})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          borderRadius: '12px',
        }}
      ></div>
      {/* Teal Rectangle 2 */}
      <div
        style={{
          position: 'absolute',
          width: '89.63px',
          height: '15.8px',
          left: '47.74px',
          top: '197.13px',
          background: '#95DBD1',
          borderRadius: '6.12px',
        }}
      ></div>
      {/* Ajouter */}
      <div
        style={{
          position: 'absolute',
          width: '42.82px',
          height: '11.97px',
          left: '59.18px',
          top: '199.61px',
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '11px',
          lineHeight: '13px',
          color: '#FFFFFF',
          display: 'flex',
          
          justifySelf: "flex-start",
        }}
      >
       {props.category}
      </div>
      {/* Clock */}
      <div
        style={{
          position: 'absolute',
          width: '9.15px',
          height: '9.86px',
          left: '64.07px',
          top: '199.95px',
          backgroundImage: `url('clock_image.png')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
    </div>
  );
};

export default CardComponent;