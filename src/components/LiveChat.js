import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import store from '../utils/store';
import { generateRandomImage, generateRandomName, makeRandomMessage } from '../utils/helper';


const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState('');
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) =>store.chat.messages)
useEffect(()=>{
    const i = setInterval(()=>{
//Api polling
        dispatch(addMessage({
            name: generateRandomName(),
            message: makeRandomMessage(20),
            image: generateRandomImage(),
        }))
    },1000)

    return ()=>clearInterval(i);
},[])

  return (
    <>
    <div className='w-full overflow-y-scroll h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg flex flex-col-reverse'>
       <div>
        {
            chatMessages.map((c,i) => (
                <ChatMessage key={i} name={c?.name} message={c?.message} image={c?.image}/>
            ))
        }
        </div>
    </div>
    <form className='w-full p-2 ml-2 border border-black' onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessage({
            name: "Raj",
            message: liveMessage,
            image: generateRandomImage(),
        }))
        setLiveMessage('');
    }}>
    <input className='px-2 w-96' type='text' value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)}/>
    <button type='submit' className='px-2 mx-2 bg-green-300'>Send</button>
    </form>
</>
  )
}

export default LiveChat