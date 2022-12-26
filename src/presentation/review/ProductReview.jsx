import React from 'react'
import SVG from '../../common/svg/svg'
import Reviews from '../../common/utilities/Products/Reviews'
import { classNames, ratings } from '../../utils/function'

const ProductReview = ({ reviews, isLoading, ...props }) => {
    return (
        <section {...props}>
            <div className="2xs:w-full lg:w-1/2 container mt-8 px-5 py-24 mr-auto">
                <div className="flex flex-col w-full 2xs:mb-16 md:mb-12">
                    <h1 className="text-[1.2rem] lg:text-2xl font-medium text-left title-font mb-1 text-gray-900 tracking-widest">Product Reviews</h1>
                    <div className='flex mt-8 items-center justify-start'>
                        <p className='text-[30px] font-semibold ml-2'>4.5</p>
                        <SVG {...{ svgClassName: classNames('ml-1 w-7 h-7 text-indigo-500') }} type="solid_star" />
                    </div>
                    <p>( 1,068 ratings and 56 reviews )</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {
                        reviews?.map(({ _id, review, username, profile, ...otherData }) => (
                            <div key={_id} className="p-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                                <div className="inline-flex items-center">
                                    <img alt="blog" src={profile || "https://dummyimage.com/104x104"} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-gray-900">{username}</span>
                                        <span className="text-gray-400 text-xs tracking-widest mt-0.5">{review?.comment}</span>
                                        <span className="inline-flex mt-[4px]">
                                            <Reviews isCustomHeadline {...{ ...ratings(review?.rating || 0, 5), svgClassName: "w-4 h-4" }} />
                                        </span>
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ProductReview