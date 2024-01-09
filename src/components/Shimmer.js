import React from 'react'
import '../App.css';
const Shimmer = () => {
    let arr = Array(10).fill(1);
  return (
    <div className='flex flex-col items-center sm:flex-row flex-wrap'>
    {arr.map((e,i)=><div key={i} className='w-full sm:w-72 my-2 sm:p-2 sm:m-2 shadow-lg'>
      <div className='w-full h-60  bg-gray-200 rounded-lg sm:m-2'></div>
      <h1 className='w-2/3 h-5 bg-gray-200 m-5'> </h1>
      <h1 className='w-2/3 h-5 bg-gray-200 m-5'> </h1>
      <h1 className='w-2/3 h-5 bg-gray-200 m-5'> </h1>
    </div>)}
    </div>
  )
}

export default Shimmer