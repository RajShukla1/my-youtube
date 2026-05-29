import React from 'react'
import ButtonList from 'features/videos/ButtonList'
import VideoContainer from 'features/videos/VideoContainer'

const Home = () => {
  return (
    <div className='w-full'>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default Home