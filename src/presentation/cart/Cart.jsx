import React from 'react'
import Topbar from '../Topbar'
import Item from '../../common/Item'
// import Addresses from '../../common/utilities/Addresses'
import List from '../../common/utilities/List'
import TotalAmount from '../../common/utilities/TotalAmount'
import OrderSteps from '../../common/OrderSteps'
import useCart from '../../components/cart'

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

    const { stepsData } = useCart()

    return (
        <section className='w-full h-full' {...props} >
            <Topbar />
            <div className='grid gap-4 grid-cols-12 px-4 sm:px-8 p-4' >
                <div className='w-full col-span-12 mt-[62px] md:col-span-12'>
                    <div className='flex items-center justify-center mt-4 mb-4 xs:mb-6'>
                        <OrderSteps {...{ stepsData }} className="w-[1024px] xs:w-[300px] sm:w-[450px] md:w-[80%] lg:w-[70%] xl:w-[60%] grid grid-cols-12 divide-x divide-gray-100 overflow-hidden rounded-lg border border-gray-100 text-sm text-gray-500 2xs:grid-cols-3 sm:grid-cols-3" />
                    </div>
                    <div className="flow-root">
                        <List className="divide-y divide-gray-200">
                            {products.map(({ id, ...data }) => <Item className="flex py-6 px-1 mx-auto xs:w-[95%] sm:w-[460px] sm:mx-auto md:w-[70%] w-full lg:mx-auto lg:w-[500px]" key={id} {...data} />)}
                        </List>
                    </div>
                    <TotalAmount className="border-t border-gray-200 py-6 px-4 lg:px-0 sm:w-[460px] sm:px-1 md:w-full mx-auto lg:w-[500px]" {...{ sub_total: 200.00 }} />
                </div>
                {/* <div className='col-span-12 md:col-span-5'>
                    <Addresses className="text-gray-400 body-font" />
                </div> */}
            </div>
        </section>
    )
}

export default Cart