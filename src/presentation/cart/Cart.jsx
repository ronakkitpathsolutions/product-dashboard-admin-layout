import React from 'react'
import Topbar from '../Topbar'
import OrderSteps from '../../common/OrderSteps'
import useCart from '../../components/cart'
import CheckoutSteps from '../../common/utilities/CheckoutSteps'

const products = [
    {
        id: 1,
        name: 'Throwback Hip Bag',
        href: '#',
        color: 'Salmon',
        price: '$90.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
        id: 2,
        name: 'Medium Stuff Satchel',
        href: '#',
        color: 'Blue',
        price: '$32.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
        imageAlt:
            'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    {
        id: 3,
        name: 'Throwback Hip Bag',
        href: '#',
        color: 'Salmon',
        price: '$90.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    }
]

const Cart = ({ ...props }) => {

    const { stepsData, handleActiveStep, activeKey } = useCart()

    return (
        <section className='w-full h-full' {...props} >
            <Topbar isFixed />
            <div className='grid gap-4 grid-cols-12 px-4 sm:px-8 p-4' >
                <div className='w-full col-span-12 mt-[62px] md:col-span-12'>
                    <div className='flex items-center justify-center mt-4 mb-4 xs:mb-6'>
                        <OrderSteps {...{ stepsData, activeKey, handleActiveStep }} className="w-[1024px] xs:w-[300px] sm:w-[450px] md:w-[80%] lg:w-[70%] xl:w-[60%] grid grid-cols-12 divide-x divide-gray-100 overflow-hidden rounded-lg border border-gray-100 text-sm text-gray-500 2xs:grid-cols-3 sm:grid-cols-3" />
                    </div>
                    <CheckoutSteps {...{ products }} name={activeKey} />
                </div>
            </div>
        </section>
    )
}

export default Cart