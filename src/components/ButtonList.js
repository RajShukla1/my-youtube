import React from 'react'
import Button from './Button'

const List = ["All","Gaming","Cricket","Live","News","Songs","Podcasts","Comedy","Horror","Education","Geopolitics","Movies","Action","Drama","Cooking","Vlogs","Lucknow","Travel","Romance"];
const ButtonList = () => {
  return (
    <div className='flex overflow-x-auto'>
      {List.map((e,i) =>{
        return <Button name={e} key={i}/>
      })
      }
    </div>
  )
}

export default ButtonList