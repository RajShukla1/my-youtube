import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';

const VideoContainer = () => {
  const [videos,setVideos] = useState([]);

  useEffect(()=>{
    getVideos();
  },[]);

  const getVideos = async ()=>{
    try{
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items)
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