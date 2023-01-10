import React from 'react'
import OrderSteps from '../../common/OrderSteps'
import useCart from '../../components/cart'
import CheckoutSteps from '../../common/utilities/CheckoutSteps'
import loading from '../../assets/load.svg'
import ProductLoading from '../../components/product/ProductLoading'
import EmptyCart from './EmptyCart'
import { useSelector } from 'react-redux'

const Cart = ({ ...props }) => {
    const { stepsData, handleActiveStep, activeKey, isLoading } = useCart()
    const cart = useSelector(({ cartReducer }) => cartReducer?.cart)

    return (
        <div className='pt-[65px]' >
            {isLoading ? <ProductLoading {...{ loading }} /> : <div className="bg-white">
                {
                    cart?.length ? <div {...props} className='grid gap-4 grid-cols-12 px-4 sm:px-8 p-4' >
                        <div className='w-full col-span-12 mt-[16px] md:col-span-12'>
                            <div className='flex items-center justify-center mt-4 mb-4 xs:mb-8'>
                                <OrderSteps {...{ stepsData, activeKey, handleActiveStep }} className="w-[1024px] xs:w-[300px] sm:w-[450px] md:w-[80%] lg:w-[70%] xl:w-[60%] grid grid-cols-12 divide-x divide-gray-100 overflow-hidden rounded-lg border border-gray-100 text-sm text-gray-500 2xs:grid-cols-3 sm:grid-cols-3" />
                            </div>
                            <CheckoutSteps {...{ products: cart }} name={activeKey} />
                        </div>
                    </div> : <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8' >
                        <EmptyCart {...{ headline: "Your Cart is empty!", message: "seems like you don't have products here. Add a cart!" }} className="text-gray-600 body-font" />
                    </div>
                }
            </div>
            }
        </div>
    )
}

export default Cart