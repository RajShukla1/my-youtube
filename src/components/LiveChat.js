import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import store from '../utils/store';
import { generateRandomImage, generateRandomMessage, generateRandomName, makeRandomMessage } from '../utils/helper';
import { USER_IMAGE } from '../utils/constants';


const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState('');
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) =>store.chat.messages)
useEffect(()=>{
    const i = setInterval(()=>{
//Api polling
        dispatch(addMessage({
            name: generateRandomName(),
            message: generateRandomMessage(),
            image: generateRandomImage(),
        }))
    },1000)

    return ()=>clearInterval(i);
},[])

  return (
    <>
    <div className='w-full overflow-y-scroll h-[600px] ml-2 p-2 border bg-slate-100 rounded-lg flex flex-col'>
        {
            chatMessages.map((c,i) => (
                <ChatMessage key={i} name={c?.name} message={c?.message} image={c?.image}/>
            ))
        }
    </div>
    <form className='flex w-full p-2 ml-2' onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessage({
            name: "Raj",
            message: liveMessage,
            image: USER_IMAGE,
        }))
        setLiveMessage('');
    }}>
    <img className='h-8 rounded-full' src = {USER_IMAGE} alt='user-icon'/>
    <input className='px-3 mx-2 w-full border border-gray-400 rounded-2xl' type='text' placeholder='Chat...' value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)}/>
    <button type='submit' className='px-2 mx-2 text-3xl '>➤</button>
    </form>
</>
  )
}

export default LiveChat