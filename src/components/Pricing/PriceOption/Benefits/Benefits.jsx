import { CheckBadgeIcon } from '@heroicons/react/24/solid'
import React from 'react'

function Benefits(props) {
  return (
    <div className='m-2 flex'>
        <CheckBadgeIcon className='w-5 h-5 text-blue-400 mr-2'></CheckBadgeIcon>
        <p>{props.benefit}</p>
    </div>
  )
}

export default Benefits