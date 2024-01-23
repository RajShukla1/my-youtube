import React, { useEffect, useState } from 'react'
import { Link, json, useLocation, useParams } from 'react-router-dom'
import { YOUTUBE_SEARCH_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import Shimmer from './Shimmer';

const SearchPage = () => {
    const [videos, setVideos] = useState([]);
    let location = useLocation();
    let {query} = useParams();
    useEffect(()=>{ 
        console.log(query);
    },[location])
    const getVideos = async ()=>{
        let data = await fetch(YOUTUBE_SEARCH_VIDEOS_API+query);
        let json = await data.json();
        console.log(json?.items);
        setVideos(json?.items)
    }
    useEffect(()=>{
        getVideos();
    },[query])
  return (
    videos.length === 0? <Shimmer/>:(
        <div className='flex flex-col sm:px-10 items-center sm:flex-row flex-wrap'>
          {videos.map((video,i) =>(
             <Link to={"/watch?v="+video?.id?.videoId} key={i} target='_top'><VideoCard info={video}/></Link>
            ))}
        </div>
  ))
}

export default SearchPage