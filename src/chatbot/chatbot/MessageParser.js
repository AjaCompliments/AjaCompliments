// in MessageParser.js
import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('bonjour')) {
      actions.handleHello();
    }
    if (message.includes('dog')) {
              actions.handleDog();    
            }
    if (message.includes('douleurs')||message.includes('mal au tete')) {
              actions.handleHeadache();    
            }
            if (message.includes('astuce')) {
              actions.handleAstuce();    
            }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;