import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({name, id}) => {
  return (
    <Link to={"/search/&videoCategoryId="+id} className="flex-shrink-0">
        <button className='px-4 py-1.5 whitespace-nowrap bg-surface hover:bg-surface-hover text-foreground text-sm font-medium rounded-lg transition-colors border border-border shadow-sm'>
            {name}
        </button>
    </Link>
  )
}

export default Button