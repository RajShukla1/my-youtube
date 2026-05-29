import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from 'store/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from 'features/watch/CommentsContainer';
import VideoContainer from 'features/videos/VideoContainer';
import LiveChat from 'features/chat/LiveChat';
import { GOOGLE_API_KEY } from 'utils/constants';

const Watch = () => {
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get('v');
    const dispatch = useDispatch();
    const [videoInfo, setVideoInfo] = useState(null);

    useEffect(() => {
        dispatch(closeMenu());
        window.scrollTo(0, 0); // Scroll to top when watching a new video
    }, [dispatch, videoId]);

    useEffect(() => {
        if(!videoId) return;
        const getVideoDetails = async () => {
            try {
                const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${GOOGLE_API_KEY}`);
                if (!response.ok) throw new Error("Failed to fetch video details");
                const data = await response.json();
                if(data.items && data.items.length > 0) {
                    setVideoInfo(data.items[0]);
                }
            } catch(e) {
                console.error(e);
            }
        };
        getVideoDetails();
    }, [videoId]);

    // Format view count nicely
    const formatViews = (views) => {
      if (!views) return '0';
      const num = parseInt(views);
      if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
      if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
      return num;
    }

    const { snippet, statistics } = videoInfo || {};

  return (
    <div className="w-full min-h-screen bg-background">
      <div className="max-w-[1800px] mx-auto p-4 sm:p-6 lg:p-8 flex flex-col xl:flex-row gap-6 lg:gap-8">
        
        {/* Main Content Area (Video + Details + Comments) */}
        <div className="flex-1 min-w-0">
          {/* Player Container */}
          <div className="w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl relative group">
            {/* Subtle glow effect behind player */}
            <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl -z-10"></div>
            <iframe 
              className="w-full h-full" 
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>

          {/* Video Details */}
          <div className="mt-4 mb-6 pb-6 border-b border-border">
            <h1 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                {snippet ? snippet.title : <div className="h-8 bg-surface-hover animate-pulse rounded w-3/4"></div>}
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-hover overflow-hidden">
                    {snippet && <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(snippet.channelTitle)}&background=random`} alt="channel" className="w-full h-full object-cover" />}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                      {snippet ? snippet.channelTitle : <div className="h-5 bg-surface-hover animate-pulse rounded w-32 mb-1"></div>}
                  </h3>
                  <p className="text-sm text-gray-500">
                      {snippet ? "1.2M subscribers" : <div className="h-4 bg-surface-hover animate-pulse rounded w-24"></div>}
                  </p>
                </div>
                {snippet && (
                    <button className="ml-4 px-4 py-2 bg-foreground text-background font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                      Subscribe
                    </button>
                )}
              </div>
              
              {snippet && (
                  <div className="flex items-center gap-2">
                     <button className="flex items-center gap-2 px-4 py-2 bg-surface hover:bg-surface-hover rounded-l-full border-r border-border font-medium transition-colors">
                       👍 {formatViews(statistics?.likeCount)}
                     </button>
                     <button className="flex items-center gap-2 px-4 py-2 bg-surface hover:bg-surface-hover rounded-r-full font-medium transition-colors">
                       👎
                     </button>
                     <button className="ml-2 flex items-center gap-2 px-4 py-2 bg-surface hover:bg-surface-hover rounded-full font-medium transition-colors">
                       Share
                     </button>
                  </div>
              )}
            </div>
            {snippet && (
                <div className="mt-4 p-3 bg-surface rounded-xl text-sm">
                    <p className="font-semibold text-foreground">{formatViews(statistics?.viewCount)} views • {new Date(snippet.publishedAt).toLocaleDateString()}</p>
                </div>
            )}
          </div>

          <CommentsContainer id={videoId}/>
        </div>

        {/* Sidebar Area (Live Chat + Related Videos) */}
        <div className="w-full xl:w-[400px] flex-shrink-0 flex flex-col gap-6">
          <div className="bg-surface border border-border rounded-2xl overflow-hidden shadow-sm h-[500px] flex flex-col">
             <div className="px-4 py-3 border-b border-border bg-background">
               <h2 className="font-semibold text-foreground">Live Chat</h2>
             </div>
             <div className="flex-1 overflow-hidden">
               <LiveChat/>
             </div>
          </div>
          <div className="flex-1">
             <h3 className="font-semibold text-foreground mb-4 px-2">Related Videos</h3>
             <VideoContainer isSidebar={true}/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Watch