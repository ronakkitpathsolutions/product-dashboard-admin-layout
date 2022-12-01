import React from 'react'
import { Outlet } from 'react-router-dom'
import OfferHeading from '../../common/OfferHeading'
import Footer from '../Footer/Footer'
import NotFound from '../NotFound'
import Topbar from '../Topbar'

const PublicLayout = ({ isDefaultAccess, ...props }) => {
    return isDefaultAccess ? <section className='relative w-full'  {...props} >
            <div className='fixed w-full z-[95]' >
                <OfferHeading />
                <Topbar />
            </div>
            <div className='pt-[105px]' >
                 <Outlet {...props} />
             <Footer className="text-gray-600 body-font" />
            </div>
        </section> : <NotFound />
}

export default PublicLayout