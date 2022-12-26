import React from 'react'
import useProducts from '../../../components/product/products'
import { convetRuppesFormat } from '../../../utils/function'
import Icon from '../../Icon'

const ProductCard = ({ _id, product_image, category, product_name, price, handleClick, ...props }) => {

    const { wishlists, addToWishList, productOverview } = useProducts()

    return (
        <div>
            <div onClick={() => productOverview(_id)} className="cursor-pointer relative aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-[25rem]">
                <span className="bg-green-500 2xs:px-2 2xs:py-[0.2rem] text-white md:px-3 md:py-1 tracking-widest text-[0.5rem] md:text-xs absolute right-0 top-0 rounded-bl">Popular</span>
                <img src={product_image} alt={_id} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div>
                <div className="mt-4 flex justify-between">
                    <h3 className="text-gray-500 2xs:text-[0.8rem] md:text-[1rem] tracking-widest title-font mb-1">{category}</h3>
                    <div className='flex items-center justify-evenly' >
                        <Icon onClick={() => addToWishList(_id)} className="w-6 h-6 text-bold text-red-500" type={wishlists[_id] ? "heart_solid" : "heart"} />
                    </div>
                </div>
                <div className='flex justify-between' >
                    <h2 className="text-gray-900 title-font 2xs:text-[0.8rem] md:text-[1rem] font-medium">{product_name}</h2>
                    <p className="mt-1 2xs:text-[0.8rem] ml-[6px] md:text-[1rem] font-medium">₹{convetRuppesFormat(price || 1)}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard