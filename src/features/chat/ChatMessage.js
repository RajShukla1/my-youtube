import React from 'react'

const ChatMessage = ({ name, message, image }) => {
  return (
    <div className='flex items-start gap-3 py-1.5 px-3 hover:bg-surface-hover/50 transition-colors'>
        <img 
            className='h-6 w-6 sm:h-7 sm:w-7 rounded-full object-cover flex-shrink-0 bg-surface' 
            alt={name} 
            src={image}
            onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name || 'U')}&background=random` }}
        />
        <div className="flex flex-col leading-tight">
            <span className='font-semibold text-[13px] text-gray-500 dark:text-gray-400'>{name}</span>
            <span className='text-[13px] text-foreground break-words'>{message}</span>
        </div>
    </div>
  )
}

export default ChatMessage