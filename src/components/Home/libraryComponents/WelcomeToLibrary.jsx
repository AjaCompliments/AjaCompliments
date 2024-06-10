import React from "react"

const WelcomeLib=(props)=>{




    return (
        <div style={{ marginTop:"2vh", width: '90vw', padding:"3vh", border: '0px solid #ccc', borderRadius: '8px', alignItems: 'center' }}>
          <div >
            <img src={require("../../Standalone Components/logo3.png")} alt="Avatar" style={{ marginTop:"1vh", width: '12vw', height: '12vw', borderRadius: '50%' }} />
          </div>
          <div style={{ marginTop:"-5.5vh",marginLeft: '16vw', fontFamily: 'Epilogue', fontWeight: 500, fontSize: '5vw', lineHeight: '6.5vw', color: '#2C2C2C' }}>
          Bienvenue dans votre encyclopédie AJA !
          </div>
        </div>
      );
}
export default WelcomeLib