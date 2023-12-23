import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen = useSelector(store=>store.app.isMenuOpen);
  return (
    <div className='hidden sm:block p-5 shadow-lg w-48'>
        <ul>
            <Link to={"/"}><li>Home</li></Link>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Live</li>
        </ul>
        {!isMenuOpen ? null :
        <>
        <h1 className='font-bold pt-5'>Subscriptions</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <h1 className='font-bold pt-5'>Watch Later</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        </>}
    </div>
  )
}

export default Sidebar