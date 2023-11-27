import React from 'react'

const VideoCard = ({info}) => {
    const {statistics , snippet} = info;
    const {thumbnails, channelTitle, title} = snippet;
  return (
    <div className='w-72 p-2 m-2 shadow-lg'>
        <img className='rounded-lg' alt = "thumbnail" src={thumbnails?.medium?.url}/>
        <ul>
            <li className="font-bold my-2">{title}</li>
            <li>{channelTitle}</li>
            <li>{Math.round(statistics?.viewCount/(10**6))}M views</li>
        </ul>
    </div>
  )
}

export default VideoCard