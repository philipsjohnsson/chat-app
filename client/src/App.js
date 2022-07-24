import { useState } from 'react';
import './App.css';
import StartScreen from './StartScreen/StartScreen'
import Chat from './Chat/Chat'

function App() {
  const [show, setShow] = useState(false)

  function inputForChat(nickname, room) {
    console.log('TESTTEST')
    console.log(nickname)
    console.log(room)
    if (room === '' || nickname === '') {
      console.log('HELLO THIS WORKS')
    } else {
      setShow(true)
    }
  }

  return (
    <div className="App">
      {!show && <StartScreen inputForChat={inputForChat} />}
      {show && <Chat />}
    </div>
  );
}

export default App;
