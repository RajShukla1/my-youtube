import React, { useState } from 'react'
import { generateRandomImage } from '../utils/helper';

const commentsData = [
    {
        name:"Raj",
        text : "what a nice video",
        reply : [
            {
                name:"Shiv",
                text : "No this is just an average video ever",
                reply : [
        
                ]
            }
        ]
    },
    {
        name:"Moe",
        text : "just looking like a wow",
        reply : [
            {
                name:"Raj",
                text : "lorem ipsum",
                reply : [
                    {
                        name:"moe",
                        text : "lorem ipsum",
                        reply : [
                
                        ]
                    }
                ]
            }
        ]
    },
    {
        name:"panda",
        text : "lorem ipsum",
        reply : [
            {
                name:"Raj",
                text : "lorem ipsum",
                reply : [
        
                ]
            },
            {
                name:"neasr",
                text : "lorem ipsum",
                reply : [
                    {
                        name:"Raj",
                        text : "lorem ipsum",
                        reply : [
                
                        ]
                    }
                ]
            }
        ]
    }
]

const Comment = ({ data }) =>{
    const {name, text, reply} = data;   
    return <div className='flex my-2 shadow-sm bg-gray-100 p-2 rounded-lg' >
        <img className='w-10 h-10 rounded-full' src={generateRandomImage()} alt = 'user'/>
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>;
}

const CommentsList = ({comments})=>{
    const [show, setShow] = useState(false);
    return comments.map((comment,i)=>(
     <div key={i}>   
    <Comment data = {comment}/>
    {
     !show ?
    <button onClick={()=>setShow(true)}>Show</button>:
    <>
    <button onClick={()=>setShow(false)}>Hide</button>
    <div className='pl-5 border border-l-black ml-5'>
        <CommentsList comments={comment?.reply} />
    </div>
    </>
}
    </div>
    ))
}

const CommentsContainer = () => {
  return (
    <div className='sm:m-5 w-full sm:w-2/3 shadow-sm bg-gray-100 mt-5 sm:px-5 rounded-lg'>
        <h1 className='text-2xl font-bold'>Comments: </h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer