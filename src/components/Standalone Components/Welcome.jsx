import React from 'react';

const WelcomeText = () => {
  const welcomeTextStyle = {
    "margin-left":"15vw",
    "padding-bottom":"3vh",
   
    width: '60.82vw', /* Converted from 191px */
    height: '2.67vh', /* Converted from 40px */
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: '10.27vw', /* Converted from 32px */
    lineHeight: '5.33vw', /* Converted from 40px */
    textAlign: 'center',
    color: '#3C676E',
  };

  return (
    <div style={welcomeTextStyle}>
      {/* Your text goes here */}
      Bienvenue !
    </div>
  );
};

export default WelcomeText;
