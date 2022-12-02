import React from 'react'
import Button from '../../common/Forms/Button'
import Icon from '../../common/Icon'
import ProductSocial from '../../common/utilities/Products/ProductSocial'
import Reviews from '../../common/utilities/Products/Reviews'
import useOverview from '../../components/product/overview'
import useProducts from '../../components/product/products'
import { classNames, ratings } from '../../utils/function'

const Overview = ({ ...props }) => {
  const { socials, availableColors, id } = useOverview()
  const { wishlists, addToWishList } = useProducts()

  return (
    <section {...props} className="text-gray-600 body-font overflow-hidden">
      <div className="w-full xs:container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img alt="ecommerce" className="2xs:w-full sm:w-4/5 md:w-3/5 lg:w-1/2 lg:h-auto object-cover object-center rounded" src="https://dummyimage.com/400x400" />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
            <div className='2xs:mb-4 md:mb-auto flex items-center justify-between' >
              <h1 className="text-gray-900 2xs:text-lg xs:text-xl md:text-3xl text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
              <Button handleClick={() => addToWishList(id)}  className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4" >
                <Icon className="w-6 h-6 text-bold text-red-500" type={wishlists[id] ? "heart_solid" : "heart"} />
              </Button>
            </div>
            <div className="flex mb-4">
              <Reviews {...{ ...ratings(4, 5) }} />
              <ProductSocial {...{ socials }} className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s" />
            </div>
            <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Colors:</span>
                {availableColors.map(({ id, name }) => <Button key={id} style={{ backgroundColor: name }} className={classNames("border-2 mr-1 rounded-full w-6 h-6 focus:outline-none border-gray-300 ")} />)}
              </div>
            </div>
            <div className="flex 2xs:justify-between sm:justify-end items-center">
              <span className="title-font font-medium text-2xl text-gray-900">₹2500.00</span>
              <div className='flex justify-center items-center' >
                <Button className="rounded text-bold text-white py-2 px-4 bg-indigo-500 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4" >
                  Checkout <Icon className="ml-2 w-6 h-6" type="cart" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Overview