import React, { useRef, useState } from 'react'
import './Chat.css'
// import ChatMessage from '../ChatMessage/ChatMessage'

const Chat = () => {
  // const root = ReactDOM.createRoot(document.getElementById('root'));
  const textareaMessage = useRef(null)
  const messageWrapper = useRef(null)
  const [message, setMessage] = useState([])

  const submitMessage = event => {

    const messageText = {text: textareaMessage.current.value, author: 'philip'}

    setMessage(message => [...message, messageText])
    console.log(message)
  }

  return ( 
  <div className="chat-wrapper">
    <div className="chat-container">
      <div className="chat-messages" id="chat-messages" ref={messageWrapper}>
        {message.map(element => <div className="message">{element.text}</div>)}
      </div>
      <textarea ref={textareaMessage} name="" id="" cols="38" rows="5"></textarea>
      <button onClick={submitMessage}>Skicka</button>
    </div>
  </div> 
  );

  // const root = createRoot(document.getElementById('chat-messages'))

}
 
export default Chat;