import React from 'react'
import Sidebar from '../COMPO/Sidebar'
import Chat from '../COMPO/Chat'


const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default Home