import { useEffect, useState } from 'react';
import { USER_IMAGE, YOUTUBE_COMMENTS_API } from 'utils/constants';
import Comment from './Comment';

export const CommentsList = ({ comments }) => {
    if (!comments || comments.length === 0) return null;
    
    return (
        <div className="flex flex-col mt-4">
            {comments.map((comment, key) => (
                <Comment 
                   key={key} 
                   reply={comment?.snippet?.totalReplyCount > 0 ? comment?.replies?.comments : []} 
                   data={comment?.snippet?.topLevelComment?.snippet || comment?.snippet}
                />
            ))}
        </div>
    );
};

const CommentsContainer = ({ id }) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    const getComments = async () => {
        if (!id) return;
        setLoading(true);
        try {
            const data = await fetch(YOUTUBE_COMMENTS_API + id);
            const json = await data.json();
            setComments(json?.items || []);
        } catch (error) {
            console.error("Failed to fetch comments", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getComments();
    }, [id]);

    return (
        <div className='w-full mt-8'>
            <h2 className='text-xl font-bold text-foreground mb-6'>
                {comments.length > 0 ? `${comments.length} Comments` : 'Comments'}
            </h2>
            
            {/* Mock Add Comment Input */}
            <div className="flex gap-4 mb-8">
               <img 
                 className='w-10 h-10 rounded-full bg-surface-hover object-cover' 
                 src={USER_IMAGE} 
                 alt="User"
                 onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=You&background=random` }}
               />
               <div className="flex-1">
                   <input 
                     type="text" 
                     className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-primary-500 dark:focus:border-primary-400 focus:outline-none transition-colors pb-1 text-foreground"
                     placeholder="Add a comment..."
                   />
                   <div className="flex justify-end gap-2 mt-2 opacity-0 focus-within:opacity-100 transition-opacity">
                      <button className="px-4 py-2 text-sm font-medium hover:bg-surface-hover rounded-full transition-colors text-foreground">Cancel</button>
                      <button className="px-4 py-2 text-sm font-medium bg-surface text-gray-500 rounded-full cursor-not-allowed">Comment</button>
                   </div>
               </div>
            </div>

            {loading ? (
                <div className="animate-pulse space-y-6">
                   {[1,2,3].map(i => (
                       <div key={i} className="flex gap-4">
                          <div className="w-10 h-10 rounded-full bg-surface-hover"></div>
                          <div className="flex-1 space-y-2 py-1">
                             <div className="h-4 bg-surface-hover rounded w-1/4"></div>
                             <div className="h-4 bg-surface-hover rounded w-3/4"></div>
                          </div>
                       </div>
                   ))}
                </div>
            ) : (
                <CommentsList comments={comments} />
            )}
        </div>
    )
}

export default CommentsContainer;