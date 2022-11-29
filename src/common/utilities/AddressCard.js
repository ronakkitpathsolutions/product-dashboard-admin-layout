import React from 'react'
import Button from '../Forms/Button'
import { classNames } from '../../utils/function'

const AddressCard = ({ addresses, ...props }) => {
    return (
        <div {...props}>
            {addresses?.map(({id, isDefaultShipping, shipping_name, ...data}) => <div key={id} className="p-4 cursor-pointer mx-auto w-full sm:w-[80%] xs:w-[400px] md:w-[450px]" >
                <div className={classNames(isDefaultShipping ? "border-indigo-500" : "border-gray-300", "h-full p-6 rounded-lg border-2 flex flex-col relative overflow-hidden")}>
                    {isDefaultShipping ? <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">SELECTED</span> : null}
                    <h2 className="bg-indigo-500 text-sm tracking-widest text-white px-1 mr-auto rounded title-font mb-1 font-medium">{data.type_of_address}</h2>
                    <h1 className="text-xl text-gray-900 leading-none flex items-center pb-2 mb-3 border-b border-gray-200">
                        <span>{shipping_name}</span>
                    </h1>
                    <p className="flex text-gray-600 mb-2">
                        <span className="w-3 h-3 mr-2 mt-1 inline-flex items-center justify-start bg-gray-400 text-white rounded-full flex-shrink-0"/>
                        {data?.address_line_1}, {data?.city} - ({data.pin_code})
                    </p>
                    <p className="flex font-medium text-gray-600 mb-2">
                        Mobile - {data.contact_number}
                    </p>
                    <div className='flex items-center mt-2 justify-start' >
                        <Button className="border block px-[8px] py-[4px] rounded-md text-base font-medium bg-indigo-500 border-indigo-500 text-white" {...{label: "Edit"}} />
                        <Button className="ml-2 border block px-[8px] py-[4px] rounded-md text-base font-medium border-red-500 text-red-500" {...{label: "Remove"}} />
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default AddressCard