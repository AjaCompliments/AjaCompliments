import React from 'react';

const QuickReplyButton = ({ actionProvider, messageText }) => {
  const handleClick = () => {
    if (messageText.includes("FAQ")){
        actionProvider.handleClickedFAQs()
    }
    if (messageText.includes("plus")){
        actionProvider.handleFurtherQuickReplies()
    }
    if (messageText.includes("more")&&messageText.includes("even")){
        actionProvider.handleFurtherQuickReplies2()
    }
    if (messageText.includes("profile biometrique")){
      actionProvider.handleQuestionnaire()
    }
    if (messageText.includes("diagnostic")){
      actionProvider.handleDiagnostic()
    }
    if (messageText.includes("astuce")){
      actionProvider.handleAstuce()
    }


    //else {actionProvider.handleParrotClick(messageText)}
  };

  return (
    // <button onClick={handleClick} style={{ margin: '5px' }}>
    //   {messageText}
    // </button>
    <button onClick={handleClick} style={{ marginTop:"5px",margin: "1px", padding: '8px', borderRadius: '25px', backgroundColor: '#ffff', color: ' #1d1d1d', border: '1px solid #173e3f', cursor: 'pointer' ,fontSize: "1.7vh"}}>
  {messageText}
</button>

  );
};

export default QuickReplyButton;
