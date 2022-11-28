import React from 'react'
import loader from '../assets/Default.svg'

const Loader = ({ ...props }) => {
  return (
    <div className="h-[100vh] bg-indigo-400 w-full flex justify-center items-center" {...props} >
      <img className='w-[180px] sm:w-[280px] md:w-[300px] lg:w-[450px] animate-bounce-slow' alt="default_loader" src={loader} />
    </div>
  )
}

export default Loader