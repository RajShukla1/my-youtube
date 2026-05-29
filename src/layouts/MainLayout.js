import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='flex items-start'>
      <Sidebar/>
      <div className='flex-1 w-full min-w-0'>
        <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout