import React, { useState } from 'react'
import { CommentsList } from './CommentsContainer';

const Comment = ({ data, reply }) =>{
    const [show, setShow] = useState(false);
    const {authorDisplayName:name, authorProfileImageUrl:image, textOriginal:text, videoId:id, likeCount} = data;
    const [likes, setLikes] = useState(likeCount);
    return <div className='shadow-md'>
    <div className='flex my-2 p-2 rounded-lg' >
        <img className='w-10 h-10 rounded-full' src={image} alt = 'user'/>
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
            <button onClick={()=>setLikes(likes+1)}>👍{likes}</button>
        </div>
        </div>
        {reply.length > 0 ?
    (!show ?
    <button onClick={()=>setShow(true)}>Replies</button>:
    <>
    <button onClick={()=>setShow(false)}>Hide</button>
    <div className='pl-5 border border-l-black ml-5'>
        <CommentsList comments={reply} id={id} />
    </div>
    </>):""
}
    </div>;
}
export default Comment