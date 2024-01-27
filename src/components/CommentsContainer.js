import { useEffect, useState } from 'react';
import { USER_IMAGE, YOUTUBE_COMMENTS_API } from '../utils/constants';
import { images } from '../utils/helper';
import Comment from './Comment';
const commentsData = [
    {
        authorDisplayName:"Raj",
        textOriginal : "what a nice video",
        authorProfileImageUrl: USER_IMAGE,
        reply : [
            {
                authorDisplayName:"Shiv",
                textOriginal : "No this is just an average video ever",
                authorProfileImageUrl: images[0],
                reply : [
        
                ]
            }
        ]
    },
    {
        authorDisplayName:"Moe",
        textOriginal : "just looking like a wow",
        authorProfileImageUrl: images[1],
        reply : [
            {
                authorDisplayName:"Raj",
                textOriginal : "lorem ipsum",
                authorProfileImageUrl: USER_IMAGE,
                reply : [
                    {
                        authorDisplayName:"moe",
                        textOriginal : "lorem ipsum",
                        authorProfileImageUrl: images[1],
                        reply : [
                
                        ]
                    }
                ]
            }
        ]
    },
    {
        authorDisplayName:"panda",
        textOriginal : "lorem ipsum",
        authorProfileImageUrl: images[2],
        reply : [
            {
                authorDisplayName:"Raj",
                textOriginal : "lorem ipsum",
                authorProfileImageUrl: USER_IMAGE,
                reply : [
        
                ]
            },
            {
                authorDisplayName:"neasr",
                textOriginal : "lorem ipsum",
                authorProfileImageUrl: images[3],
                reply : [
                    {
                        authorDisplayName:"Raj",
                        textOriginal : "lorem ipsum",
                        authorProfileImageUrl: USER_IMAGE,
                        reply : [
                
                        ]
                    }
                ]
            }
        ]
    }
]

export const CommentsList = ({comment, id})=>{
    const [comments, setComments] = useState([]);
    const getComments = async ()=>{
        const data = await fetch(YOUTUBE_COMMENTS_API+id);
        const json = await data.json();
        console.log(json?.items);
        setComments(json?.items);
    }
    useEffect(()=>{
        getComments();
    },[])
    return <>
    {comments?.map((comment)=><Comment reply={comment?.snippet?.totalReplyCount > 0 ? comment?.replies?.comments:[]} data = {comment?.snippet?.topLevelComment?.snippet}/>)}
    </>
}

const CommentsContainer = ({id}) => {
  return (
    <div className='sm:m-5 w-full sm:w-[850px] shadow-sm  mt-5 sm:px-5 rounded-lg'>
        <h1 className='text-2xl font-bold'>Comments: </h1>
        <CommentsList comment={commentsData} id={id}/>
    </div>
  )
}

export default CommentsContainer