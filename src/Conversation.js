import React from "react";

const ConvAvatar = props => (
  <div class='chat_img'>
    <img src={props.avatar} alt='Spencer' />
  </div>
);

const ConMessage = props => <p>{props.message}</p>;

const ConDate = props => <span class='chat_date'>{props.date}</span>;

class Conversation extends React.Component {
  render() {
    const { conversation } = this.props;
    return (
      <div class='chat_list'>
        <div class='chat_people'>
          <ConvAvatar avatar={conversation.avatar_url} />
          <div class='chat_ib'>
            <h5>
              {conversation.first_name} {conversation.last_name}
              <ConDate date={conversation.date} />
            </h5>
            <ConMessage message={conversation.last_message} />
          </div>
        </div>
      </div>
    );
  }
}

export default Conversation;
