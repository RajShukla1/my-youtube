import React from 'react'

const Shimmer = () => {
    let arr = Array(12).fill(1);
  return (
    <div className='flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 p-4 w-full'>
      {arr.map((e, i) => (
        <div key={i} className='w-full sm:w-[320px] mb-8 animate-pulse'>
          <div className='w-full aspect-video bg-surface-hover rounded-xl mb-3'></div>
          <div className='flex gap-3 pr-2'>
            <div className='flex-shrink-0 mt-1'>
                <div className='w-9 h-9 rounded-full bg-surface-hover'></div>
            </div>
            <div className='flex flex-col flex-1 gap-2 mt-1'>
                <div className="w-[90%] h-4 bg-surface-hover rounded"></div>
                <div className="w-[60%] h-4 bg-surface-hover rounded"></div>
                <div className="w-[40%] h-3 bg-surface-hover rounded mt-1"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Shimmer