import React from 'react'
import OfferHeading from '../common/OfferHeading'
import Topbar from './Topbar'

const Landing = ({ ...props }) => {
    return (
        <section className='relative w-screen'  {...props} >
            <OfferHeading />
            <Topbar/>
        </section>
    )
}







export default Landing