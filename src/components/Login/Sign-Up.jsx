import React from 'react';
import { Grid, Card } from '@mui/material';
import CustomButton1 from '../Standalone Components/Button1';
import CustomText from '../Standalone Components/ButtonText';
import { ArrowForward } from '@mui/icons-material';
import CustomSubText from '../Standalone Components/Subtext';
import CustomEmailInput from '../Standalone Components/EmailInput';
import CustomPasswordInput from '../Standalone Components/PasswordInput';
import FloatingTextLogin from '../Standalone Components/FloatingTextLogin';// Assuming this is a signup-specific text component
import WelcomeText from '../Standalone Components/Welcome';
import ImageComponent from '../Standalone Components/logo1';
import CustomNameInput from '../Standalone Components/CustomNameInput';

const SignupComponent = (props) => {
  return (
    <>
      <div style={{ 
        position: "relative",
        width: "100vw",
        height: "100vh",
        background: "#F6EDE4",
        borderRadius: "40px"
      }}>
        <div style={{
          position: "absolute",
          width: "117vw",
          height: "58vh",
          left: "-15vw",
          top: "-25vh",
          background: "linear-gradient(145.63deg, #44A5A5 12.8%, #91FCFC 12.81%, rgba(255, 255, 255, 0) 94.92%)"
        }}>
          <>
            <ImageComponent />
            <div style={{ marginTop: "50vh", marginLeft: "20vw" }}>
              <WelcomeText />
              <FloatingTextLogin />
              <div style={{ marginBottom: "5vh" }}>
                <CustomNameInput placeholder="votre nom" />
              </div>
              <div style={{ marginBottom: "5vh" }}>
                <CustomEmailInput placeholder="votre email" />
              </div>
              <div style={{ marginBottom: "5vh" }}>
                <CustomPasswordInput placeholder="mot de passe" />
              </div>
              <CustomButton1>
                <CustomText>Sign Up</CustomText>
              </CustomButton1>
              <div style={{ marginTop: "3vh", marginLeft: "3vw" }} onClick={props.setScreen}>
                <CustomSubText>verify</CustomSubText>
              </div>
            </div>
            <div style={{ marginTop: "3vh", marginLeft: "20vw" }}>
              <CustomButton1>
                <CustomText>Start your test</CustomText>
                <ArrowForward style={{ color: "#F6EDE4" }} />
              </CustomButton1>
            </div>
          </>
        </div>
      </div>
    </>
  );
}

export default SignupComponent;
