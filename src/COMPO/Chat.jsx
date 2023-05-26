import React from 'react'
import video from '../img/cam.png'
import more from '../img/more.png'
import attach from '../img/attach.png'
import Messages from './Messages'
import Input from './Input'


const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span> Kaustubh </span>
        <div className="chatIcons">
          <img src={video} alt="" />
          <img src={attach} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <Messages />
      <Input/>

    </div>
  )
}

export default Chat