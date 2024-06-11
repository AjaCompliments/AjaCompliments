// in ActionProvider.jsx
import React from 'react';
import axios from 'axios';
import { LINK_TO_BACKEND } from '../../variables';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const handleHello = () => {
    const botMessage = createChatBotMessage('bonjour. ravis de vous rencontrer.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleHeadache = () => {
    const botMessage = createChatBotMessage('Je me cert pas a vous presciber un medicament, pourtant, vous pouvez prendre paracetamol pour ca');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleClickedFAQs = () => {
    const botMessage = createChatBotMessage('FAQs clicked!');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleAstuce = async () => {
    try {
      // Make an HTTP GET request to fetch all astuces
      const response =await axios.get(`${LINK_TO_BACKEND}/astuces/getAll`);
  
      // Extract astuces from the response data
      const astuces = response.data;
  
      // Select a random astuce from the array
      const randomIndex = Math.floor(Math.random() * astuces.length);
      const randomAstuce = astuces[randomIndex];
      console.log(randomAstuce)
      // Create a bot message with the random astuce
      const botMessage = createChatBotMessage(randomAstuce.astuce);
  
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } catch (error) {
      // Handle errors, such as network errors or invalid response
      console.error('Error fetching astuces:', error);
    }
  };
  const handleParrotClick = (prop) => {
    const botMessage = createChatBotMessage(prop);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleFurtherQuickReplies = () => {
    const botMessage = createChatBotMessage("here are more options",{widget:"quickRepliesLayer2"});

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleQuestionnaire = () => {
    const botMessage = createChatBotMessage("Créons le profil biométrique!",{widget:"questionnaire"});

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleDiagnostic = () => {
    const botMessage = createChatBotMessage("Diagnostiquons-vous",{widget:"diagnostique"});

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleFurtherQuickReplies2 = () => {
    const botMessage = createChatBotMessage("voici encore plus des actions",{widget:"quickRepliesLayer3"});

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };


  const handleDog = () => {
    const botMessage = createChatBotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: 'dogPicture',
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };


  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleDog,
            handleHeadache,
            handleClickedFAQs,
            handleParrotClick,
            handleFurtherQuickReplies,
            handleFurtherQuickReplies2,
            handleQuestionnaire,
            handleDiagnostic,
            handleAstuce
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;