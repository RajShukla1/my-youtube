import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({name, id}) => {
  console.log(name);
  return (
    <div>
        <Link to={"/search/&videoCategoryId="+id}><button className='m-2 p-2 b rounded-lg hover bg-gray-200 w-max'>{name}</button></Link>
    </div>
  )
}

export default Button