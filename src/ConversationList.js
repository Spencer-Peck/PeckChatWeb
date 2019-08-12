import React from "react";

import Conversation from "./Conversation";

const ConversationList = props => {
  return (
    <div>
      {Object.values(props.conversations).map(conversation => (
        <Conversation conversation={conversation} key={conversation.Id} />
      ))}
    </div>
  );
};

export default ConversationList;
