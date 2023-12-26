import React, { useState } from 'react'
import { CommentsList } from './CommentsContainer';

const Comment = ({ data }) =>{
    const [show, setShow] = useState(false);
    const {name, text, image, reply} = data;   
    return <div className='bg-gray-100 shadow-sm'>
    <div className='flex my-2 p-2 rounded-lg' >
        <img className='w-10 h-10 rounded-full' src={image} alt = 'user'/>
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
        </div>
        {reply.length > 0 ?
    (!show ?
    <button onClick={()=>setShow(true)}>Replies</button>:
    <>
    <button onClick={()=>setShow(false)}>Hide</button>
    <div className='pl-5 border border-l-black ml-5'>
        <CommentsList comments={reply} />
    </div>
    </>):""
}
    </div>;
}
export default Comment