import { USER_IMAGE } from '../utils/constants';
import { images } from '../utils/helper';
import Comment from './Comment';
const commentsData = [
    {
        name:"Raj",
        text : "what a nice video",
        image: USER_IMAGE,
        reply : [
            {
                name:"Shiv",
                text : "No this is just an average video ever",
                image: images[0],
                reply : [
        
                ]
            }
        ]
    },
    {
        name:"Moe",
        text : "just looking like a wow",
        image: images[1],
        reply : [
            {
                name:"Raj",
                text : "lorem ipsum",
                image: USER_IMAGE,
                reply : [
                    {
                        name:"moe",
                        text : "lorem ipsum",
                        image: images[1],
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
        image: images[2],
        reply : [
            {
                name:"Raj",
                text : "lorem ipsum",
                image: USER_IMAGE,
                reply : [
        
                ]
            },
            {
                name:"neasr",
                text : "lorem ipsum",
                image: images[3],
                reply : [
                    {
                        name:"Raj",
                        text : "lorem ipsum",
                        image: USER_IMAGE,
                        reply : [
                
                        ]
                    }
                ]
            }
        ]
    }
]

export const CommentsList = ({comments})=>{
    return comments.map((comment,i)=>(
     <div key={i}>   
    <Comment data = {comment}/>
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