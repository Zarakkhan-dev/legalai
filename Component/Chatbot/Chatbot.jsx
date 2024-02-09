import axios from 'axios';
import React, { useState } from 'react'

const Chatbot = () => {

  const [message,updateMessage] =useState("");
  const [fields,update_fields] =useState({
    sentence:""
  })
const Handler =(e)=>{
const value = e.target;
update_fields((pre)=>{
return({
  ...pre,
  sentence:value
})
})
}
  const submission=async()=>{
    const {sentence} = fields;

    const response = await axios.post("http://127.0.0.1:8000/predict/",{sentence});

    if(response){
      updateMessage(response.data.response);
      
    }
  }
  return (
    <div>
      <form action="POST" onSubmit={submission}>

    <input type="text" name="sentence" placeholder='Enter The Prompt here ' onChange={Handler} value={fields.sentence} />
    <button type='submit'>Send Message</button>
      </form>

      <h6>
        {message}
      </h6>
    </div>
  )
}

export default Chatbot
