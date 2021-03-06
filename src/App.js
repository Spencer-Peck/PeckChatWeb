import React, { useState } from "react";

import "./App.scss";

import ConversationList from "./ConversationList";

import DataApi from "./DataApi";

import { data } from "./testData";

const api = new DataApi(data);

const App = () => {
  const convs = {
    con: api.getConversations(),
  };

  return (
    <div class='chat_portal'>
      <div class='portal'>
        <div class='inbox_people'>
          <div class='inbox_chat scroll'>
            <ConversationList conversations={convs.con} />
          </div>
        </div>
        <div class='mesgs'>
          <div class='msg_history'>
            <div class='incoming_msg'>
              <div class='incoming_msg_img'>
                {" "}
                <img
                  src='https://ptetutorials.com/images/user-profile.png'
                  alt='Spencer'
                />{" "}
              </div>
              <div class='received_msg'>
                <div class='received_withd_msg'>
                  <span class='time_date'>Spencer</span>
                  <p>Test which is a new approach to have all solutions</p>
                  <span class='time_date'> 11:01 AM | June 9</span>
                </div>
              </div>
            </div>
            <div class='outgoing_msg'>
              <div class='sent_msg'>
                <p>Test which is a new approach to have all solutions</p>
                <span class='time_date'> 11:01 AM | June 9</span>{" "}
              </div>
            </div>
            <div class='incoming_msg'>
              <div class='incoming_msg_img'>
                {" "}
                <img
                  src='https://ptetutorials.com/images/user-profile.png'
                  alt='Spencer'
                />{" "}
              </div>
              <div class='received_msg'>
                <div class='received_withd_msg'>
                  <span class='time_date'>Spencer</span>
                  <p>Test, which is a new approach to have</p>
                  <span class='time_date'> 11:01 AM | Yesterday</span>
                </div>
              </div>
            </div>
            <div class='outgoing_msg'>
              <div class='sent_msg'>
                <p>Apollo University, Delhi, India Test</p>
                <span class='time_date'> 11:01 AM | Today</span>{" "}
              </div>
            </div>
            <div class='incoming_msg'>
              <div class='incoming_msg_img'>
                {" "}
                <img
                  src='https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/27858138_1593774910707182_2748145206093582840_n.jpg?_nc_cat=109&_nc_ht=scontent-sea1-1.xx&oh=cdd39565451e09589f37cf9fb98cdeca&oe=5D1FC48C'
                  alt='Spencer'
                />{" "}
              </div>
              <div class='received_msg'>
                <div class='received_withd_msg'>
                  <span class='time_date'>Spencer</span>
                  <p>
                    We work directly with our designers and suppliers, and sell
                    direct to you, which means quality, exclusive products, at a
                    price anyone can afford.
                  </p>
                  <span class='time_date'> 11:01 AM | Today</span>
                </div>
              </div>
            </div>
          </div>
          <div class='type_msg'>
            <div class='input_msg_write'>
              <input
                type='text'
                class='write_msg'
                placeholder='Type a message'
              />
              <button class='msg_send_btn' type='button'>
                <i class='fa fa-paper-plane' aria-hidden='true' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
