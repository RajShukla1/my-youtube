import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='m-2 p-2 b rounded-lg hover bg-gray-200'>{name}</button>
    </div>
  )
}

export default Button