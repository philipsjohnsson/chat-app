import React, { useRef, useState } from 'react'
import './Chat.css'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
// import ChatMessage from '../ChatMessage/ChatMessage'

const Chat = () => {
  // const root = ReactDOM.createRoot(document.getElementById('root'));
  const textareaMessage = useRef(null)
  const messageWrapper = useRef(null)
  const [message, setMessage] = useState([])

  const submitMessage = event => {

    console.log(event)
    console.log(textareaMessage.current.value)
    const element = React.createElement("div", {id: "hej"}, "first react element")
    console.log(element)
    const element2 = <h1>HEJ</h1>
    console.log(element2)
    // ReactDOM.render(element, document.getElementById("chat-messages"))
    // const root = createRoot(document.getElementById('chat-messages'))
    // root.render(element2)
    // root.unmount()

    const messageText = {text: textareaMessage.current.value, author: 'philip'}



    setMessage(message => [...message,messageText])
    console.log(message)
  }

  return ( 
  <div className="chat-wrapper">
    <div className="chat-container">
      <div className="chat-messages" id="chat-messages" ref={messageWrapper}>
        {message.map(element => <div>{element.text}</div>)}
      </div>
      <textarea ref={textareaMessage} name="" id="" cols="38" rows="5"></textarea>
      <button onClick={submitMessage}>Skicka</button>
    </div>
  </div> 
  );

  // const root = createRoot(document.getElementById('chat-messages'))

}
 
export default Chat;