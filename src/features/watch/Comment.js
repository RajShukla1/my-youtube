import React, { useState } from 'react'
import { CommentsList } from './CommentsContainer';

const Comment = ({ data, reply }) =>{
    const [show, setShow] = useState(false);
    const {authorDisplayName:name, authorProfileImageUrl:image, textOriginal:text, videoId:id, likeCount} = data;
    const [likes, setLikes] = useState(likeCount || 0);

    return (
    <div className='flex gap-4 mb-5 group'>
        <div className="flex-shrink-0">
          <img 
              className='w-10 h-10 rounded-full bg-surface-hover object-cover' 
              src={image} 
              alt={name}
              onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name || 'U')}&background=random` }}
          />
        </div>
        <div className='flex flex-col flex-1'>
            <div className="flex items-baseline gap-2 mb-1">
                <p className='font-semibold text-foreground text-sm'>{name}</p>
                <span className="text-xs text-gray-500">2 hours ago</span>
            </div>
            <p className="text-sm text-foreground mb-2 whitespace-pre-wrap">{text}</p>
            
            <div className="flex items-center gap-4 text-gray-500">
                <button 
                  onClick={()=>setLikes(likes+1)} 
                  className="flex items-center gap-1.5 text-xs font-medium hover:text-foreground transition-colors p-1 -ml-1 rounded-full hover:bg-surface-hover"
                >
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
                   {likes > 0 && likes}
                </button>
                <button className="flex items-center gap-1.5 text-xs font-medium hover:text-foreground transition-colors p-1 rounded-full hover:bg-surface-hover">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" /></svg>
                </button>
                <button className="text-xs font-medium hover:text-foreground transition-colors px-2 py-1 rounded-full hover:bg-surface-hover">
                   Reply
                </button>
            </div>

            {reply && reply.length > 0 && (
              <div className="mt-2">
                {!show ? (
                    <button 
                      onClick={()=>setShow(true)} 
                      className="flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400 font-semibold hover:bg-primary-50 dark:hover:bg-primary-900/30 px-3 py-1.5 rounded-full transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        {reply.length} {reply.length === 1 ? 'reply' : 'replies'}
                    </button>
                ) : (
                    <>
                        <button 
                           onClick={()=>setShow(false)} 
                           className="flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400 font-semibold hover:bg-primary-50 dark:hover:bg-primary-900/30 px-3 py-1.5 rounded-full transition-colors mb-3"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                            Hide {reply.length === 1 ? 'reply' : 'replies'}
                        </button>
                        <div className='pl-2 border-l-2 border-border ml-2'>
                            <CommentsList comments={reply} id={id} />
                        </div>
                    </>
                )}
              </div>
            )}
        </div>
    </div>
    );
}

export default Comment;
