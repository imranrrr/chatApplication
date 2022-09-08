import React, { useEffect, useState } from "react";
import { ref, push, set,onChildAdded, } from "firebase/database";
import {  db } from "../Firebase/index";
import "./Chat.css";
function Chat() {
  const [name, setName] = useState("");
  const [chats, setChats] = useState([]);
  const [msg, setMsg] = useState("");
  const ChatListRef = ref(db, 'chats');
  const sendChat = () => {
    // const c = [...chats];
    // c.push({ name, message: msg });
    // setChats(c);
    setMsg('')
const ChatListRef = ref(db, 'chats');
const ChatRef = push(ChatListRef);
set(ChatRef, {
    name, message: msg
});
  };
   useEffect(()=>{
        onChildAdded(ChatListRef, (data) => {
            setChats(chats=>[...chats,data.val()])
          });
    },[])
  return (
    <div>
        {name? null:<div>
            <input type="text" placeholder="Enter Name to Start"  onBlur={e=>setName(e.target.value)}/>
        </div>}
       { name?<div><h3>User: {name}</h3>
      <div className="chat_container">
        {chats.map((c,i) => (
          <div key={i} className={`container ${c.name === name ? "me" : ""}`}>
            <p className="chatbox">
              <strong>{c.name}:</strong>
              <span>{c.message}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="btm">
        <input
          type="text"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
          placeholder="enter your message"
        />
        <button onClick={sendChat}>Send</button>
      </div></div>
      :null
}
    </div>
  );
}

export default Chat;
