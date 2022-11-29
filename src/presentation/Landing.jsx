import React from 'react'
import OfferHeading from '../common/OfferHeading'
import Footer from './Footer/Footer'
import Topbar from './Topbar'

const Landing = ({ ...props }) => {
    return (
        <section className='relative w-full'  {...props} >
            <div className='fixed w-full' >
                <OfferHeading />
                <Topbar />
            </div>
            <div className='pt-[105px]' >
            <Footer className="text-gray-600 body-font" />
            </div>
        </section>
    )
}







export default Landing