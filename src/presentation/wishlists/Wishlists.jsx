import React from 'react'
import ProductCard from '../../common/utilities/Products/ProductCard'
import useProducts from '../../components/product/products'
import loading from '../../assets/load.svg'
import { classNames } from '../../utils/function'
import ProductLoading from '../../components/product/ProductLoading'
import EmptyCart from '../cart/EmptyCart'
import Footer from '../Footer/Footer'
import { useSelector } from 'react-redux'

const Wishlists = ({ ...props }) => {
    const { addToWishList, wishlists, productOverview, isProductLoading } = useProducts()
    const wishlists_data = useSelector(({wishlistReducer}) => wishlistReducer?.all_wishlists)
    return (
        <div className={classNames('pt-[65px]')} {...props} >
            {isProductLoading ? <ProductLoading {...{ loading }} /> : <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    {wishlists_data?.length ? <>
                        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Wishlist Products</h2>
                        <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {wishlists_data?.map(({ _id, ...value }) => <ProductCard {...{wishlists, addToWishList, productOverview}} handleClick={addToWishList} key={_id} {...{ _id }} {...value} className="group cursor-pointer relative" />)}
                        </div>
                    </> : <EmptyCart {...{headline:"Your Wishlist is empty!", message:"seems like you don't have wishes here. Make a wish!"}} className="text-gray-600 body-font" />}
                </div>
            </div>}
        { !isProductLoading ? <Footer className="text-gray-600 body-font bg-gray-100" /> : null}
        </div>
    )
}

export default Wishlists