import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';

const VideoContainer = () => {
  const [videos,setVideos] = useState([]);
  const [nextPageToken, setnextPageToken] = useState("");

  useEffect(()=>{
    getVideos();
  },[]);

  useEffect(() => {
    window.addEventListener('scroll',infiniteScroll,true);
    return () => {
      window.removeEventListener('scroll',infiniteScroll,true);
    }
  },[nextPageToken]);

  const infiniteScroll = () => {
    if(window.innerHeight + Math.round(document.documentElement.scrollTop) >= document.documentElement.offsetHeight - 300){
      getVideos();
    }
  }

  const getVideos = async ()=>{
    try{
      const url = nextPageToken === '' ? YOUTUBE_VIDEOS_API : `${YOUTUBE_VIDEOS_API}&pageToken=${nextPageToken}`;
    const data = await fetch(url);
    const json = await data.json();
    console.log(json);
    setnextPageToken(json?.nextPageToken)
    setVideos([...videos,...json?.items])
    }
    catch(e){
      console.log(e)
    }
  };

  return videos.length === 0? <Shimmer/>:(
    <div className='flex flex-col sm:px-10 items-center sm:flex-row flex-wrap'>
      {videos.map((video) =>(
         <Link to={"/watch?v="+video.id} key={video?.id} target='_top'><VideoCard info={video}/></Link>
        ))}
    </div>
  )
}

export default VideoContainer;