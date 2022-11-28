import React from 'react'
import useAddresses from '../../components/addresses'
import AddressCard from './AddressCard'

const Addresses = ({ ...props }) => {

    const { addresses } = useAddresses()

    return (
        <section {...props} >
            <div className='px-16 py-8 mx-auto flex flex-wrap border border-indigo-500' >
                <div className="flex flex-col text-center md:text-left w-full mb-5">
                    <h2 className="ml-2 text-xl text-gray-800 tracking-widest font-medium title-font mb-4">Select Delivery Address </h2>
                </div>
                <div className='w-full p-4' >
                    <p className='mb-[12px]' >Select or add an address.</p>
                    <div className='flex flex-wrap' >
                        <div className='w-1/2 border border-indigo-800 px-4 ' >Col-1</div>
                        <div className='w-1/2 border border-indigo-800 px-4 ' >Col-2</div>
                        {/* {addresses.map((data, index) => <AddressCard key={index} {...data} /> )} */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Addresses