import React from "react"

const StatsAvatar=(props)=>{




    return (
        <div style={{ marginTop:"0vh", width: '90vw', padding:"3vh", border: '0px solid #ccc', borderRadius: '8px', alignItems: 'center' }}>
          <div >
            <img src={props.avatar?props.avatar:require("../../Standalone Components/logo3.png")} alt="Avatar" style={{ marginTop:"1vh", width: '20vw', height: '20vw', borderRadius: '50%' }} />
          </div>
          <div style={{ marginTop:"-7.5vh",marginLeft: '26vw', fontFamily: 'Epilogue', fontWeight: 500, fontSize: '7vw', lineHeight: '6.5vw', color: '#2C2C2C' }}>
          {props.username?props.username:"User"}
          </div>
          <div style={{ marginTop:"-0.1vh",marginLeft: '26vw', fontFamily: 'Epilogue', fontWeight: 400, fontSize: '4vw', lineHeight: '6.5vw', color: '#2C2C2C' }}>
          {props.usersubtitle?props.usersubtitle:"Manager statement"}
          </div>
        </div>
      );
}
export default StatsAvatar