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
            <button onClick={()=>setLikes(likes+1)}><svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.9 4.5C15.9 3 14.418 2 13.26 2c-.806 0-.869.612-.993 1.82-.055.53-.121 1.174-.267 1.93-.386 2.002-1.72 4.56-2.996 5.325V17C9 19.25 9.75 20 13 20h3.773c2.176 0 2.703-1.433 2.899-1.964l.013-.036c.114-.306.358-.547.638-.82.31-.306.664-.653.927-1.18.311-.623.27-1.177.233-1.67-.023-.299-.044-.575.017-.83.064-.27.146-.475.225-.671.143-.356.275-.686.275-1.329 0-1.5-.748-2.498-2.315-2.498H15.5S15.9 6 15.9 4.5zM5.5 10A1.5 1.5 0 0 0 4 11.5v7a1.5 1.5 0 0 0 3 0v-7A1.5 1.5 0 0 0 5.5 10z" fill="#000000"/></svg>{likes}</button>
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
