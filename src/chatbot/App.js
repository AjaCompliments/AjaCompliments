import React from "react";
import Chatbot from "react-chatbot-kit";


import config from "./configs/chatbotConfig";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";
//import 'react-chatbot-kit/build/main.css'
import "./chatbot.css"
function App() {
  return ( 
          <Chatbot  
           config={config}  
          messageParser={MessageParser}
         actionProvider={ActionProvider}    
           />   
            
            );
}

export default App;