import React from 'react';
//import logo from './logo.svg';
import {useState,useEffect} from 'react';
import axios from 'axios';
//import SignInPage from './components/Login/Login';
import YourComponent from './components/Login/Test';//login page
import Navbar from './components/Home/Navbar-Main';
import SignupComponent from './components/Login/Sign-Up';
import VerificationComponent from './components/Login/verification';
//import './App.css';
import "./chatbot/chatbot.css"
import { LINK_TO_BACKEND } from './variables';
function App() {
const [token,setToken]=useState("")
const [creds,setCreds]=useState({})
const [user,setUser]=useState({});
const [data,storeData]=useState({})
const onloadUserCredentials=async ()=>{
  const val=await localStorage.getItem('token')
  if (val!==null){
  await axios({
      method:'get',
      headers: {Authorization:"bearer "+await JSON.parse(localStorage.getItem('token'))},
      url:`${LINK_TO_BACKEND}/users/getUser`
  }).then((response)=>{
      console.log(response)
      localStorage.setItem('USR',JSON.stringify(response.data))
      //setCreds({...creds,name:response.data.name,email:response.data.email,idstaff:response.data.idstaff,role:response.data.role})
      setUser(response.data)
      console.log(response.data)
  });


}
else {console.log("not stored")}
}

useEffect (()=>{onloadUserCredentials()},[])

useEffect(() => {
  // Check if 'compliments' exists in localStorage
  let tk = JSON.parse(localStorage.getItem('token'));
  if(tk){setToken(tk)}
}, []);
const cb=(input)=>{
setCreds(input)
axios
                .post(`${LINK_TO_BACKEND}/users/login`,{"useremail":input.email,"userpass":input.password})
                .then((resp)=>{
                  storeData(resp.data);
                 
                    localStorage.setItem('token', JSON.stringify(resp.data));
                    onloadUserCredentials()
                  setToken(resp.data);
                  console.log(resp.data);
              //  window.location.reload(false);
                
                })
                .catch(error=>{
                  if(error){
                    alert(
                        'incorrect credentials',
                        'please check your email or password'
                    )}
                })
console.log(input)
}
const cb1=(input)=>{
  setCreds(input)
  axios
                  .post(`${LINK_TO_BACKEND}/users/register`,{"username":input.name,"useremail":input.email,"userpass":input.password})
                  .then((resp)=>{
                    storeData(resp.data);
                   
                      localStorage.setItem('token', JSON.stringify(resp.data));
                      onloadUserCredentials()
                  //  setToken(resp.data);
                    console.log(resp.data);
                    setScreen("verification");
               //   window.location.reload(false);
                  
                  })
                  .catch(error=>{
                    if(error){
                      alert(
                          'incorrect credentials',
                          'please check your email or password'
                      )}
                  })
  console.log(input)
  }
  const cb2=(input)=>{
    setCreds(input)
    axios
                    .post(`${LINK_TO_BACKEND}/users/verify`,{"useremail":input.email,"ValidatorCode":input.password})
                    .then((resp)=>{
                      storeData(resp.data);
                     
                        localStorage.setItem('token', JSON.stringify(resp.data));
                        onloadUserCredentials()
                      setToken(resp.data);
                      console.log(resp.data);
                   // window.location.reload(false);
                    
                    })
                    .catch(error=>{
                      if(error){
                        alert(
                            'incorrect credentials',
                            'please check your email or password'
                        )}
                    })
    console.log(input)
    }
// const handleSubmit = (event) => {
//   event.preventDefault();
//   const data = new FormData(event.currentTarget);
//   setCredentials({
//     useremail: data.get('email'),
//     userpass: data.get('password'),
//   });
//   var tobe={
//     useremail: data.get('email'),
//     userpass: data.get('password'),
//   }
  
// };






const [screen,setScreen]=useState("login")
  return (
    
   !token.length?screen==="login"?<YourComponent  callback={cb} setScreen={()=>{setScreen("signUp")}}/>:screen==="verification"?
    <VerificationComponent callback={cb2} navCallback="" tokenCallback="" setScreen={()=>{setScreen("login")}}/>:
    <SignupComponent callback={cb1} navCallback="" tokenCallback="" setScreen={()=>{setScreen("verification")}}/>:<Navbar user={user.username} navCallback="" tokenCallback={setToken}/>
  );
}

export default App;
