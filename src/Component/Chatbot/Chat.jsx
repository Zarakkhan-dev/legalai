import React from 'react'

const Chat = ({person,bot}) => {
  return (
    <>
      <div className="message_container">

            <div className="Person_Querry">
                <div className="Person_icon rounded-full bg-[#2C60EA] py-[13px] px-[15px]"><i className="fa-solid fa-user-large fa-lg" style={{color:"white"}}></i></div>
                <div className="Querry">{person}</div>
            </div>
            <div className="Bot_response bg-[#F4F4F4] rounded-2xl py-4 px-2">
            <div className="Bot_icon "><i className="fa-regular fa-message fa-2xl"></i></div>
                <div className="Bot_response">{bot}</div>
            </div>
        </div>
    </>
  )
}

export default Chat
