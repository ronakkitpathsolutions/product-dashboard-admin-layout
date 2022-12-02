import React from 'react'
import useProducts from '../../../components/product/products'
import Icon from '../../Icon'

const ProductCard = ({ _id, product_image, category, product_name, price, handleClick, ...props }) => {

    const { wishlists, addToWishList, productOverview } = useProducts()

    return (
        <div>
            <div onClick={() => productOverview(_id)} className="relative 2xs:min-h-[20rem] xs:min-h-[25rem] aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-[25rem]">
                <span className="bg-green-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">Popular</span>
                <img src={product_image} alt={_id} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div className='mx-2' >
                <div className="mt-4 flex justify-between">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
                    <div className='flex items-center justify-evenly' >
                        <Icon onClick={() => addToWishList(_id)} className="w-6 h-6 text-bold text-red-500" type={wishlists[_id] ? "heart_solid" : "heart"} />
                    </div>
                </div>
                <div className='flex justify-between' >
                    <h2 className="text-gray-900 title-font text-md font-medium">{product_name}</h2>
                    <p className="mt-1 font-medium">₹{price}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard