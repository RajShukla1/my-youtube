import React, { useEffect, useState, useCallback } from 'react'
import { Link, useParams } from 'react-router-dom'
import { YOUTUBE_SEARCH_VIDEOS_API, GOOGLE_API_KEY } from 'utils/constants';
import VideoCard from 'features/videos/VideoCard';
import Shimmer from 'components/Shimmer';
import ButtonList from 'features/videos/ButtonList';

const Search = () => {
    const [videos, setVideos] = useState([]);
    let {query} = useParams();

    const getVideos = useCallback(async ()=>{
        let url = YOUTUBE_SEARCH_VIDEOS_API + query;
        // If it's a category filter, we must use the videos endpoint to get popular videos for that category
        if (query.startsWith('&videoCategoryId=')) {
            url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}${query}`;
        }
        
        try {
            const data = await fetch(url);
            const json = await data.json();
            setVideos(json?.items || []);
        } catch (e) {
            console.error(e);
            setVideos([]);
        }
    }, [query]);

    useEffect(()=>{
        getVideos();
    },[query, getVideos])

  return (
    <>
    <div className='w-full'>
      <ButtonList/>
      {videos?.length === 0 ? <Shimmer/> : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6 p-4 w-full'>
          {videos?.map((video,i) =>{
             const videoId = typeof video.id === 'object' ? video.id.videoId : video.id;
             if(!videoId) return null;
             return (
               <Link to={"/watch?v="+videoId} key={videoId + '-' + i} className="no-underline block">
                 <VideoCard info={video}/>
               </Link>
             )
          })}
        </div>
      )}
    </div>
    </>
  )
}

export default Search