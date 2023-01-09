import { TrashIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Button from './Forms/Button'
import { convetRuppesFormat } from '../utils/function'

const Item = ({qty, product_image, product_name, name, price, color, quantity, ...props }) => {

    const nett_percentage = Math.round(Math.random()*100)
    const percentage = (price * nett_percentage) / 100

    return (
        <li {...props} >
            <div className="h-38 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img src={product_image} alt={product_name} className="h-full w-full object-cover object-center" />
            </div>
            <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>{product_name}</h3>
                        <div className="flex">
                        <Button className="font-medium text-indigo-600 hover:text-indigo-500">
                            <TrashIcon className='font-bold w-[25px] text-red-500' />
                        </Button>
                    </div>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{color}</p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                    <div className='felx flex-col'>
                        <p className="text-gray-500 mb-2">Qty {qty}</p>
                        <p className="text-gray-500 bg-green-500 text-white text-[12px] font-medium px-2 border-rounded">{nett_percentage / qty}% off</p>
                    </div>
                    <div className='flex flex-col' >
                        <p className="ml-4 text-md line-through text-gray-500 text-[1rem] font-medium">₹{convetRuppesFormat(((qty || 1) * price) + percentage)}</p>
                        <p className="ml-4 text-md font-medium">₹{convetRuppesFormat((qty || 1) * price)}</p>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Item