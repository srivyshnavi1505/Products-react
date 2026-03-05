import React from 'react'
import {useLocation} from 'react-router'
//useLocation => usenavigate and this useLocation work with coordination , the other components that are not connected directly as siblings or even parent relationship.

function Product() {
  const {state} = useLocation()

  return (
    <div className='flex flex-col  sm : flex-row justify-between mt-14'>
      <div className='w-2/5 mt-14'>

      <img src={state.productt?.image} className='w-full'  alt="" />

      </div>
      <div className='w-3/5 p-10'>
        <p  className='text-3xl mb-5'>{state?.productt?.title}</p>
        <p>{state?.productt?.description}</p>
        <p className='text-3xl  m-10 '>${state?.productt?.price}</p>
        <p className='bg-amber-300 text-shadow-black  items-center p-3 inline rounded-xl'>{state?.productt?.category}</p>
      </div>
    </div>
  )
}

export default Product