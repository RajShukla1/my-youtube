import React, { useEffect, useState } from 'react'
import Button from './Button'
import { YOUTUBE_VIDEO_CATEGORY } from 'utils/constants';
import { Link } from 'react-router-dom';

const ButtonList = () => {
  const [List, setList] = useState();
  const getList = async ()=>{
    try {
        const data = await fetch(YOUTUBE_VIDEO_CATEGORY);
        const json = await data.json();
        setList(json?.items)
    } catch(e) {
        console.error(e)
    }
  }
  useEffect(()=>{
    getList();
  },[])
  return (
    <div className='flex gap-3 overflow-x-auto p-4 pt-2 scrollbar-hide border-b border-border bg-background sticky top-0 z-40' style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
      <Link to="/" className='flex-shrink-0'>
          <button className='px-4 py-1.5 whitespace-nowrap bg-foreground text-background hover:bg-gray-800 dark:hover:bg-gray-200 text-sm font-medium rounded-lg transition-colors shadow-sm'>
              All
          </button>
      </Link>
      {List?.map((e) =>{
        return <Button name={e?.snippet?.title} id={e?.id} key={e?.id}/>
      })}
    </div>
  )
}

export default ButtonList