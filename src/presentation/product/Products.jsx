import React from 'react'
import ProductCard from '../../common/utilities/Products/ProductCard'
import useProducts from '../../components/product/products'
// import useFetch from '../../hooks/useFetch'

const Products = ({ ...props }) => {

    const { products, addToWishList } = useProducts()

    return (
        <div {...props} >
            <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Our Products</h2>
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map(({id, ...data}) => <ProductCard handleClick={addToWishList} key={id} {...{id}} {...data} className="group cursor-pointer relative" />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products