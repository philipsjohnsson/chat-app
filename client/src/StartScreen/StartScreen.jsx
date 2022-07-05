import { useRef } from 'react'
import './StartScreen.css'

const StartScreen = ({inputForChat}) => {
  const inputNickname = useRef(null)
  const inputRoom = useRef(null)

  const buttonClicked = (event) => {
    event.preventDefault();
    console.log('TEST TEST BUTTON CLICKED')
    console.log(event)
    console.log(inputNickname.current.value)
    inputForChat(inputNickname.current.value, inputRoom.current.value)

  }

    return ( 
        <div className="container-startscreen">
            <div className="content-container">
            <input ref={inputNickname} className="input-nickname" type="text" placeholder="nickname"/>
            <input ref={inputRoom} type="text" placeholder="room"/>
            <button onClick={buttonClicked} >Submit</button>
            </div>
        </div>
     );
}
 
export default StartScreen;