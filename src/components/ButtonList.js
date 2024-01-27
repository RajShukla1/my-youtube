import React, { useEffect, useState } from 'react'
import Button from './Button'
import { YOUTUBE_VIDEO_CATEGORY } from '../utils/constants';
import { Link } from 'react-router-dom';

const ButtonList = () => {
  const [List, setList] = useState();
  const getList = async ()=>{
    const data = await fetch(YOUTUBE_VIDEO_CATEGORY);
    const json = await data.json();
    console.log(json?.items);
    console.log(json);
    setList(json?.items)
  }
  useEffect(()=>{
    getList();
  },[])
  return (
    <div className='btnlist flex overflow-x-auto'>
      <Link to="/"><button className='m-2 p-2 b rounded-lg hover bg-gray-200 w-max'>All</button></Link>
      {List?.map((e) =>{
        return <Button name={e?.snippet?.title} id={e?.id} key={e?.id}/>
      })
      }
    </div>
  )
}

export default ButtonList