import React, { Fragment } from 'react'
import ProductSlider from '../common/Sliders/ProductSlider'
import useSlider from '../components/slider/slider'
import Products from './product/Products'

const Landing = ({ ...props }) => {
    const { sliderData } = useSlider()
    return (
        <Fragment {...props} >
            <ProductSlider {...{ sliderData }} className="mx-auto max-w-96 px-4 2xs:my-6 sm: sm:py-4 md:pt-16 sm:px-6 md:pb-4 lg:max-w-96 lg:px-8" />
            <Products/>
        </Fragment>
    )
}







export default Landing