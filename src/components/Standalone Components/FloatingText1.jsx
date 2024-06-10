import React from 'react';

const FloatingText = (props) => {
  const floatingTextStyle = {
    position: 'absolute',
    width: '50vw', /* Converted from 375px */
    height: '53.06vh', /* Converted from 316px */
    left: 'calc(50% - 25vw - 0.5px)', /* Converted from calc(50% - 375px/2 - 0.5px) */
    top: '16.27vh', /* Converted from 180px */
    fontFamily: 'Epilogue',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: 20, /* Converted from 20px */
    lineHeight: '4vw', /* Converted from 24px */
    textAlign: 'center',
    color: '#2C2C2C',
  };

  return (
    <div style={floatingTextStyle}>
      {props.text}
      {/* Bienvenue Kais! Nous allons vous poser quelques questions afin de vous proposer une sélection de compléments, adaptés à vos besoins. Ce questionnaire n'a pas vocation à établir un diagnostic mais à vous proposer une recommandation pour rester en bonne santé; Pour cela nous allons collecter des données personnelles vous concernant. */}
    </div>
  );
};

export default FloatingText;
