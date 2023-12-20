import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import store from '../utils/store';
import { generateRandomName, makeRandomMessage } from '../utils/helper';


const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessages = useSelector((store) =>store.chat.messages)
useEffect(()=>{
    const i = setInterval(()=>{
//Api polling
        dispatch(addMessage({
            name: generateRandomName(),
            message: makeRandomMessage(20),
        }))
    },1000)

    return ()=>clearInterval(i);
},[])

  return (
    <div className='w-full overflow-y-scroll h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg flex flex-col-reverse'>
        {
            chatMessages.map((c,i) => (
                <ChatMessage key={i} name={c?.name} message={c?.message}/>
            ))
        }
    </div>
  )
}

export default LiveChat