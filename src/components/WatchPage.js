import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import VideoContainer from './VideoContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get('v'));
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[]);
  return (
    <>
    <div className='flex flex-col w-full items-center sm:items-baseline'>
    <div className='sm:px-5 flex flex-col sm:flex-row w-full'>
        <iframe className='w-full sm:aspect-video h-[300px] sm:h-full sticky top-4' src={"https://www.youtube.com/embed/"+ searchParams.get('v')+"?&autoplay=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write;autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    <div className='w-full'>
      <LiveChat/>
    </div>
    </div>
    <CommentsContainer/>
    <VideoContainer/>
    </div>
    </>
  )
}

export default WatchPage