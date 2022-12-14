import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const OverviewSlider = ({ sliderData, ...props }) => {
    return (
        <div {...props} >
            <Swiper
                direction={'vertical'}
                slidesPerView={3}
                spaceBetween={10}
                pagination={{ clickable: true }}
                modules={[Pagination]}>
                {sliderData?.map(({ key, src }) => <SwiperSlide key={key} >
                    <img alt={key} {...{ src }} className="object-cover object-center rounded" />
                </SwiperSlide>)}
            </Swiper>
        </div>
    )
}

export default OverviewSlider