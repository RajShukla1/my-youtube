import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get('v'));
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[]);
  return (
    <>
    <div className='flex flex-col'>
    <div className='px-5'>
        <iframe width="800" height="500" src={"https://www.youtube.com/embed/"+ searchParams.get('v')+"?&autoplay=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write;autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    <CommentsContainer/>
    </div>
    </>
  )
}

export default WatchPage