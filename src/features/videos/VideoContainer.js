import React, { useEffect, useState, useCallback } from 'react'
import { YOUTUBE_VIDEOS_API } from 'utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import Shimmer from 'components/Shimmer';

const VideoContainer = ({ isSidebar = false }) => {
  const [videos,setVideos] = useState([]);
  const [nextPageToken, setnextPageToken] = useState("");
  const [loading, setLoading] = useState(false);

  const getVideos = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    try{
      const url = nextPageToken === '' ? YOUTUBE_VIDEOS_API : `${YOUTUBE_VIDEOS_API}&pageToken=${nextPageToken}`;
      const data = await fetch(url);
      const json = await data.json();
      setnextPageToken(json?.nextPageToken || "");
      
      setVideos(prev => {
        const newVideos = json?.items || [];
        const existingIds = new Set(prev.map(v => typeof v.id === 'object' ? v.id.videoId : v.id));
        const filteredNew = newVideos.filter(v => {
           const id = typeof v.id === 'object' ? v.id.videoId : v.id;
           return !existingIds.has(id);
        });
        return [...prev, ...filteredNew];
      });
    }
    catch(e){
      console.error("Failed to load videos", e);
    } finally {
      setLoading(false);
    }
  }, [nextPageToken, loading]);

  useEffect(()=>{
    if (videos.length === 0) {
      getVideos();
    }
  },[]);

  useEffect(() => {
    const infiniteScroll = () => {
      if(window.innerHeight + window.scrollY >= document.documentElement.offsetHeight - 800){
        if (!loading && nextPageToken) {
           getVideos();
        }
      }
    }
    
    window.addEventListener('scroll', infiniteScroll);
    return () => window.removeEventListener('scroll', infiniteScroll);
  },[getVideos, loading, nextPageToken]);

  return (
    <div className='w-full'>
      {videos.length === 0 && loading ? (
        <Shimmer/>
      ) : (
        <div className={isSidebar ? 'flex flex-col gap-4 w-full p-2' : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6 p-4 w-full'}>
          {videos.map((video, index) => {
             const videoId = typeof video.id === 'object' ? video.id.videoId : video.id;
             if(!videoId) return null;
             return (
               <Link to={"/watch?v="+videoId} key={`${videoId}-${index}`} className="no-underline block">
                 <VideoCard info={video}/>
               </Link>
             )
          })}
        </div>
      )}
      {loading && videos.length > 0 && (
         <div className="w-full flex justify-center p-6">
            <div className="w-10 h-10 border-4 border-surface-hover border-t-primary-500 rounded-full animate-spin"></div>
         </div>
      )}
    </div>
  )
}

export default VideoContainer;