import React from 'react'
import Badge from './Badge'

const AddressCard = ({ isDefaultShipping, shipping_name, type_of_address, address_line_1, ...props }) => {
    return (
        <div className="p-4 w-full mx-auto lg:w-[450px] border-2 border-indigo-600 rounded-lg mb-4">
            <div className="flex rounded-lg h-full p-4 flex-col">
                <div className="flex items-center mb-1">
                    <div className="inline-flex items-center justify-center flex-shrink-0">
                        <Badge className="bg-indigo-500 text-white px-[8px] py-[2px] rounded-2xl" {...{type: "label", label: type_of_address}} />
                    </div>
                </div>
                <div className="flex-grow">
                    <p className='text-lg text-gray-600 font-bold' >{shipping_name} - ({props.contact_number})</p>
                    <p className='text-md text-gray-500 font-medium' >{address_line_1}, {props.area}</p>
                    <p className='text-md text-gray-500 font-medium' >{props.city} ({props.pin_code})</p>
                    <p className='text-md text-gray-500 font-medium' >{props.state} - {props.country}</p>
                </div>
            </div>
        </div>
    )
}

export default AddressCard