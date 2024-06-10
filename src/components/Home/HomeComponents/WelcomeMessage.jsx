import React from "react"

const WelcomeCard=(props)=>{




    return (
        <div style={{ marginTop:"2vh", width: '90vw', padding:"3vh", border: '0px solid #ccc', borderRadius: '8px', alignItems: 'center' }}>
          <div >
            <img src={require("../../Standalone Components/logo3.png")} alt="Avatar" style={{ marginTop:"1vh", width: '12vw', height: '12vw', borderRadius: '50%' }} />
          </div>
          <div style={{ marginTop:"-5.5vh",marginLeft: '16vw', fontFamily: 'Epilogue', fontWeight: 500, fontSize: '5vw', lineHeight: '6.5vw', color: '#2C2C2C' }}>
          Bonjour {props.username}! c'est Aja. Je peux t'aider à améliorer votre 
bien-être ?. 
          </div>
        </div>
      );
}
export default WelcomeCard