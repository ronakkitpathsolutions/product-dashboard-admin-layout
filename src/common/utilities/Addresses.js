import React from 'react'
import useAddresses from '../../components/addresses'
import AddressCard from './AddressCard'
import newAddress from '../../assets/new_address.svg'

const Addresses = ({ ...props }) => {

    const { addresses } = useAddresses()

    return (
        <section {...props} >
            <div className='px-16 py-8  xs:px-6 2xs:px-4 mx-auto flex flex-wrap' >
                <div className="flex flex-col text-center md:text-left w-full mb-5 2xs:mb-2 xs:mb-6 md:mb-12">
                    <h2 className="ml-2 2xs:ml-0 2xs:text-lg text-2xl text-gray-800 tracking-widest font-medium title-font">Select Delivery Address </h2>
                </div>
                <div className='w-full' >
                    <div className='flex 2xs:flex-col lg:flex-row flex-wrap' >
                        <div className='p-4 2xs:w-full lg:w-1/2 cursor-pointer 2xs:h-auto xs:h-[350px] h-[500px] w-1/2 flex flex-col justify-center items-center px-4 ' >
                            <img className='w-[340px] p-12 border border-indigo-500 border-4 border-dashed' alt="new_address" src={newAddress} />
                            <p className='mt-4 2xs:mt-1 2xs:text-sm text-gray-900 font-medium text-xl' >Add new address</p>
                        </div>
                        <div className='w-1/2 2xs:w-full lg:w-1/2 border border-indigo-800 px-4' >Col-2</div>
                        {/* {addresses.map((data, index) => <AddressCard key={index} {...data} /> )} */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Addresses