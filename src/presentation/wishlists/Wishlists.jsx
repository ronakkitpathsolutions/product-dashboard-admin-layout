import React from 'react'
import ProductCard from '../../common/utilities/Products/ProductCard'
import useProducts from '../../components/product/products'
import loading from '../../assets/load.svg'
import { classNames } from '../../utils/function'
import ProductLoading from '../../components/product/ProductLoading'
import useWishlists from '../../components/wishlists/wishlists'
import EmptyCart from '../cart/EmptyCart'

const Wishlists = ({ ...props }) => {
    const { addToWishList, user_id } = useProducts()
    const { data, isLoading } = useWishlists(user_id)
    return (
        <div className={classNames('pt-[65px]')} {...props} >
            {isLoading ? <ProductLoading {...{ loading }} /> : <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    {data?.wish_lists?.length ? <>
                        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Wishlist Products</h2>
                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {data?.wish_lists?.map(({ _id, ...value }) => <ProductCard handleClick={addToWishList} key={_id} {...{ _id }} {...value} className="group cursor-pointer relative" />)}
                        </div>
                    </> : <EmptyCart className="text-gray-600 body-font" />}
                </div>
            </div>}
        </div>
    )
}

export default Wishlists