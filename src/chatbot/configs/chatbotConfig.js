// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';
//import DogPicture from '../widget/DogPicture'
import QuickReplyButton from '../widget/QuickReply';
import Questionnaire from '../widget/questionnaire';
import Diagnostic from '../widget/diagnostic';
const botName = 'AJA';

const config = {

  initialMessages: [createChatBotMessage(`Bonjour! Je m'appel ${botName}, que puis-je vous aider aujourd'hui?`,{widget:"quickReplies"})],
  botName: botName,
  //  customStyles: {
  //    botMessageBox: {
  //     backgroundColor: '#376B7E',
  //    },
  //    chatButton: {
  //     backgroundColor: '#5ccc9d',
  //   },
    
  //  },
  customComponents: {
    // Replaces the default bot avatar<
    botAvatar: (props) => <img src={require("../logo3.png")} style={{width:"7vh",height:"7vh",marginRight:"1vh"}} alt="avatar"/>,
  },
  widgets: [
    {
        widgetName: 'questionnaire',
        widgetFunc:(props)=><Questionnaire {...props}/>
    },
    {
      widgetName: 'diagnostique',
      widgetFunc:(props)=><Diagnostic {...props}/>
  },
    {
      widgetName: "quickReplies",
      widgetFunc: (props) =><> <QuickReplyButton {...props} messageText="diagnostic" /> <QuickReplyButton {...props} messageText="profile biometrique" />  <QuickReplyButton {...props} messageText="astuce" /></>,
    },
    {
      widgetName: "profileBiometrique",
      widgetFunc: (props) =><><QuickReplyButton {...props} messageText="" /> <QuickReplyButton {...props} messageText="diagnostic" /> <QuickReplyButton {...props} messageText="astuce" /></>,
    },
    // {
    //   widgetName: "quickRepliesLayer2",
    //   widgetFunc: (props) =><><QuickReplyButton {...props} messageText="general well-being" /> <QuickReplyButton {...props} messageText="men's health" /> <QuickReplyButton {...props} messageText="weight gain" /> <br/> <QuickReplyButton {...props} messageText="even more..." /></>,
    // },
    // {
    //   widgetName: "quickRepliesLayer3",
    //   widgetFunc: (props) =><><QuickReplyButton {...props} messageText="women's health" /> <QuickReplyButton {...props} messageText="pregnancy" /> <QuickReplyButton {...props} messageText="cosmetics" /> <br/> <QuickReplyButton {...props} messageText="help..." /></>,
    // },
   
  ]
};

export default config;