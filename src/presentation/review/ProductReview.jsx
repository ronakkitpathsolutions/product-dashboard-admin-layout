import React from 'react'
import Reviews from '../../common/utilities/Products/Reviews'
import { ratings } from '../../utils/function'

const ProductReview = ({ reviews, isLoading, ...props }) => {
    return (
        <section {...props}>
            <div className="2xs:w-full lg:w-1/2 mt-2 lg:mt-8 py-4 xl:px-5 lg:pb-6 lg:pt-16 mr-0">
                <div className="flex flex-col w-full mb-6">
                    <h1 className="text-[1.2rem] lg:text-2xl font-medium text-left title-font mb-1 text-gray-900 tracking-widest">Product Reviews</h1>
                </div>
                <div>
                    <div className="flex items-center mb-3">
                        <Reviews isCustomHeadline {...{ ...ratings(4 || 0, 5), svgClassName: "w-4 h-4" }} />
                        <p className="ml-2 text-sm font-medium text-gray-900 dark:text-white">4.95 out of 5</p>
                    </div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
                    <div className="flex items-center mt-4">
                        <span className="text-sm font-medium text-indigo-500 dark:text-indigo-400">5 star</span>
                        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                            <div className="h-5 bg-indigo-500 rounded" style={{ width: "70%" }}></div>
                        </div>
                        <span className="text-sm font-medium text-indigo-500 dark:text-indigo-400">70%</span>
                    </div>
                    <div className="flex items-center mt-4">
                        <span className="text-sm font-medium text-indigo-500 dark:text-indigo-400">4 star</span>
                        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                            <div className="h-5 bg-indigo-500 rounded" style={{ width: "17%" }}></div>
                        </div>
                        <span className="text-sm font-medium text-indigo-500 dark:text-indigo-400">17%</span>
                    </div>
                    <div className="flex items-center mt-4">
                        <span className="text-sm font-medium text-indigo-500 dark:text-indigo-400">3 star</span>
                        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                            <div className="h-5 bg-indigo-500 rounded" style={{ width: "8%" }}></div>
                        </div>
                        <span className="text-sm font-medium text-indigo-500 dark:text-indigo-400">8%</span>
                    </div>
                    <div className="flex items-center mt-4">
                        <span className="text-sm font-medium text-indigo-500 dark:text-indigo-400">2 star</span>
                        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                            <div className="h-5 bg-indigo-500 rounded" style={{ width: "4%" }}></div>
                        </div>
                        <span className="text-sm font-medium text-indigo-500 dark:text-indigo-400">4%</span>
                    </div>
                    <div className="flex items-center mt-4">
                        <span className="text-sm font-medium text-indigo-500 dark:text-indigo-400">1 star</span>
                        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                            <div className="h-5 bg-indigo-500 rounded" style={{ width: "1%" }}></div>
                        </div>
                        <span className="text-sm font-medium text-indigo-500 dark:text-indigo-400">1%</span>
                    </div>
                </div>
            </div >
            { reviews?.length ? <div className="2xs:w-full lg:w-1/2 mt-2 lg:mt-8 py-4 xl:px-5 lg:pb-6 lg:pt-16 mr-0">
                <div className="flex flex-col w-full mb-6">
                    <h1 className="text-[1.2rem] lg:text-2xl font-medium text-left title-font mb-1 text-gray-900 tracking-widest">Product Comments</h1>
                </div>
                <div className="flex items-center mb-3">
                    <div className="flex flex-col w-full h-[320px] overflow-y-auto scrollbar-hide ">
                        {
                           reviews?.map(({ _id, review, username, profile, ...otherData }) => (
                                <div key={_id} className="p-4 mb-4 border-b-2 border-gray-100 w-full">
                                    <div {...otherData} className="inline-flex items-center">
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
            </div > : null}
        </section>
    )
}

export default ProductReview