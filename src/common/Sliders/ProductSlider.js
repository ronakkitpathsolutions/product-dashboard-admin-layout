import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative, Pagination } from "swiper";

const ProductSlider = ({ sliderData, ...props }) => {
    return (
        <div {...props} >
            <Swiper autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }} className="w-full" effect="creative" grabCursor creativeEffect={{
                prev: {
                    translate: [0, 0, 0],
                },
                next: {
                    translate: ["100%", 0, 0],
                },
            }}
                modules={[EffectCreative, Autoplay, Pagination]}>
                {sliderData.map(({ id, image, ...other }) => <SwiperSlide key={id} {...other} className='w-full' >
                    <img className='mx-auto' src={image} alt={id} />
                </SwiperSlide>)}
            </Swiper>
        </div>
    )
}

export default ProductSlider