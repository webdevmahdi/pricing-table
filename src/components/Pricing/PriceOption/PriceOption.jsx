import React from 'react'
import Benefits from './Benefits/Benefits';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

function PriceOption(props) {
  let { name, price, benefits } = props.priceDetails;
  return (
    <div className='bg-white p-3 rounded-xl'>
      <h2 className='bg-pink-300 text-4xl p-4 rounded-lg text-center'>
        {name}
      </h2>
      <h3 className='text-4xl justify-center font-bold flex'>
        {price}
        <p className='text-slate-400 text-lg'>/mo</p>
      </h3>
      {
        benefits.map(benefit => <Benefits benefit={benefit}></Benefits>)
      }
      <button className='bg-blue-400 w-full p-4 rounded-lg font-bold flex justify-center mt-7 transition-all hover:bg-blue-500 text-white'>Go ahead
        <ArrowRightIcon className='w-6 h-6'></ArrowRightIcon>
      </button>
    </div>
  )
}

export default PriceOption