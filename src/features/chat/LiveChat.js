import React, { useEffect, useState, useRef } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from 'store/chatSlice';
import { generateRandomMessage, generateRandomNameImage} from 'utils/helper';
import { USER_IMAGE } from 'utils/constants';

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState('');
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages)
    const chatContainerRef = useRef(null);

    useEffect(()=>{
        const i = setInterval(()=>{
            const [name, image] = generateRandomNameImage();
            dispatch(addMessage({
                name: name,
                message: generateRandomMessage(),
                image: image,
            }))
        },1500)

        return ()=>clearInterval(i);
    },[dispatch])

    // Auto-scroll to bottom
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatMessages]);

  return (
    <div className='flex flex-col h-full bg-background'>
        {/* Chat messages area */}
        <div 
            ref={chatContainerRef}
            className='flex-1 overflow-y-auto scroll-smooth py-2 flex flex-col-reverse'
            style={{ display: 'flex', flexDirection: 'column' }}
        >
            {
                chatMessages.map((c,i) => (
                    <ChatMessage key={i} name={c?.name} message={c?.message} image={c?.image}/>
                ))
            }
        </div>

        {/* Input area */}
        <div className="p-3 border-t border-border bg-background">
            <form 
                className='flex items-center gap-3' 
                onSubmit={(e)=>{
                    e.preventDefault();
                    if(!liveMessage.trim()) return;
                    dispatch(addMessage({
                        name: "You",
                        message: liveMessage,
                        image: USER_IMAGE,
                    }))
                    setLiveMessage('');
                }}
            >
                <img 
                    className='h-8 w-8 rounded-full object-cover flex-shrink-0 bg-surface' 
                    src={USER_IMAGE} 
                    alt='user'
                    onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=You&background=random` }}
                />
                <div className="flex-1 relative">
                    <input 
                        className='w-full bg-surface border border-border text-foreground text-sm rounded-full py-2 pl-4 pr-10 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors' 
                        type='text' 
                        placeholder='Chat publicly...' 
                        value={liveMessage} 
                        onChange={(e)=>setLiveMessage(e.target.value)}
                    />
                    <button 
                        type='submit' 
                        disabled={!liveMessage.trim()}
                        className={`absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full transition-colors ${liveMessage.trim() ? 'text-primary-500 hover:bg-surface-hover' : 'text-gray-400'}`}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LiveChat