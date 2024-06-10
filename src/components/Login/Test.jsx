import React from 'react';
import { Grid, Card } from '@mui/material';
import CustomButton1 from '../Standalone Components/Button1';
import CustomText from '../Standalone Components/ButtonText';
import { ArrowForward } from '@mui/icons-material';
import CustomSubText from '../Standalone Components/Subtext';
import CustomEmailInput from '../Standalone Components/EmailInput';
import CustomPasswordInput from '../Standalone Components/PasswordInput';
//import FloatingText from '../Standalone Components/FloatingText1';
import FloatingTextLogin from '../Standalone Components/FloatingTextLogin';
import WelcomeText from '../Standalone Components/Welcome';
import ImageComponent from '../Standalone Components/logo1';
import axios from "axios";


const YourComponent = (props) => {
  const [creds,setCreds]=React.useState({email:"",password:""})
  return (<>

    <div style={{ //height: '100vh',

      position: "relative",
      width: "100vw",
      height: "100vh",

      background: "#F6EDE4",
      "border radius": "40px",

    }}>



      <div style={{
        /* Ellipse 113 */

        position: "absolute",
        width: "117vw",
        height: "58vh",
        left: "-15vw",
        top: "-25vh",

        background: "linear-gradient(145.63deg, #44A5A5 12.8%, #91FCFC 12.81%, rgba(255, 255, 255, 0) 94.92%)",
        borderRadius: "50% 0% 0% 50%",
      }}>

        <>
          <ImageComponent />
          <div style={{ marginTop: "50vh", marginLeft: "20vw" }}>

            <WelcomeText />
            <FloatingTextLogin />


            <div style={{marginBottom :"5vh"}}>
              <CustomEmailInput value={creds.email} onChange={(event)=>{setCreds({...creds,email:event.target.value})}}/>

            </div >
            <div style={{ marginBottom: "5vh" }}>
              <CustomPasswordInput value={creds.password} onChange={(val)=>{setCreds({...creds,password:val.target.value})}}/>
            </div>
            <div style={{zIndex:5}}>
            <CustomButton1 onClick={()=>{props.callback(creds)}}>
              
              <CustomText>Me Connecter</CustomText>
            </CustomButton1>
            </div>
            <div style={{ marginTop: "3vh", marginLeft: "3vw" }} onClick={props.setScreen}>
              <CustomSubText>Vous n'avez pas de compte? Inscrivez Vous</CustomSubText>
            </div>

          </div>

          <div style={{ marginTop: "3vh", marginLeft: "20vw" }}>
            <CustomButton1>
              <CustomText>Commencer votre test</CustomText>
              <ArrowForward style={{ "color": "#F6EDE4" }} />
            </CustomButton1>
          </div>





        </>


      </div>
    </div>





  </>
  );
}

export default YourComponent;
