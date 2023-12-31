import React from 'react'

const ChatMessage = ({ name, message, image }) => {
  return (
    <div className='flex items-center text-xs sm:text-lg shadow-sm p-2'>
        <img className='h-6 sm:h-8 rounded-2xl' alt='user' src={image}/>
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage