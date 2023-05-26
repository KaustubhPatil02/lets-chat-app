import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text"  placeholder='Find someone'/>
      </div>
      <div className="userChat">
        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt="" />
        <div className="userChatInfo">
        <span>Kaustubh</span>
        </div>
      </div>
    </div>
  )
}

export default Search