import React from 'react'

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
        name:"Raj",
        text : "just looking like a wow",
        reply : [
            {
                name:"Raj",
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
    },
    {
        name:"Raj",
        text : "lorem ipsum",
        reply : [
            {
                name:"Raj",
                text : "lorem ipsum",
                reply : [
        
                ]
            },
            {
                name:"Raj",
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
        <img className='w-12 h-12' src='https://cdn-icons-png.flaticon.com/512/666/666201.png' alt = 'user'/>
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>;
}

const CommentsList = ({comments})=>{
    return comments.map((comment,i)=>(
     <div key={i}>   
    <Comment data = {comment}/>
    <div className='pl-5 border border-l-black ml-5'>
        <CommentsList comments={comment?.reply} />
    </div>
    </div>
    ))
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2 shadow-sm bg-gray-100 p-2 rounded-lg'>
        <h1 className='text-2xl font-bold'>Comments: </h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer