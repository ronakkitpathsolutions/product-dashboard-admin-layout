import React from 'react'
import Topbar from '../Topbar'

const Cart = ({...props}) => {
  return (
    <section className='w-screen h-full' {...props} >
        <Topbar/>
        <div className='grid gap-4 grid-cols-12 px-8 py-4' >
            <div className='border col-span-12'>col1</div>
            <div className='border col-span-12 md:col-span-7'>col2</div>
            <div className='border col-span-12 md:col-span-5'>col3</div>
            <div className='border col-span-12'>col4</div>
        </div>
    </section>
  )
}

export default Cart