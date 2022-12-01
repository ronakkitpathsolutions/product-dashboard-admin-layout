import React from 'react'
import useProducts from '../../../components/product/products'
import Icon from '../../Icon'

const ProductCard = ({ id, imageSrc, imageAlt, color, name, price, handleClick, ...props }) => {

    const { wishlists, addToWishList, productOverview } = useProducts()

    return (
        <div {...props} >
            <div onClick={() => productOverview(id)} className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                <img src={imageSrc} alt={imageAlt} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div className='mx-2' >
                <div className="mt-4 flex justify-between">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{color}</h3>
                    <div className='flex items-center justify-evenly' >
                        <Icon onClick={() => addToWishList(id)} className="w-6 h-6 text-bold text-red-500" type={wishlists[id] ? "heart_solid" : "heart"} />
                    </div>
                </div>
                <div className='flex justify-between' >
                    <h2 className="text-gray-900 title-font text-lg font-medium">{name}</h2>
                    <p className="mt-1 font-medium">{price}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard