import React from 'react'

const Chat = ({person,bot}) => {
  return (
    <>
      <div className=" flex flex-col gap-4 w-full mb-4 ">

            <div className="Person_Querry flex items-center gap-7 Title_Name">
                <div className="Person_icon rounded-full bg-[#2C60EA] py-[10px] px-[13px]"><i className="fa-solid fa-user-large" style={{color:"white"}}></i></div>
                <div className="Querry">{person}</div>
            </div>
            <div className="Bot_response bg-[#F4F4F4] rounded-2xl py-4 px-2 flex  items-center gap-7 Title_Name">
            <div className="Bot_icon "><i className="fa-regular fa-message fa-lg"></i></div>
                <div className="Bot_response">{bot}</div>
            </div>
        </div>
    </>
  )
}

export default Chat
