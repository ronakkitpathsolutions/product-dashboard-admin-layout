import React from 'react'
import Reviews from '../../common/utilities/Products/Reviews'
import { ratings } from '../../utils/function'

const ProductReview = ({ ...props }) => {
    return (
        <section {...props}>
            <div class="container mt-8 px-5 py-24 mx-auto">
                <div class="flex flex-col w-full 2xs:mb-16 md:mb-12">
                    <h1 class="text-2xl font-medium 2xs:text-center lg:text-left title-font mb-1 text-gray-900 tracking-widest">Product Reviews</h1>
                    <div className='flex flex-col 2xs:items-center 2xs:justify-center md:items-start md:justify-start'>
                        <p className='text-[40px] font-semibold ml-2'>4.5 <span className='text-[20px]' >out of 5</span></p>
                        <Reviews isCustomHeadline className="mt-2" {...{ ...ratings(4, 5), svgClassName: "w-10 h-10" }} />
                    </div>
                </div>
                <div class="flex flex-wrap -m-4">
                    <div class="p-4 lg:w-1/2">
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200" />
                            <div class="flex-grow sm:pl-8">
                                <h2 class="title-font font-medium text-lg text-gray-900">Holden Caulfield</h2>
                                <h3 class="text-gray-500 mb-3">UI Developer</h3>
                                <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span class="inline-flex">
                                    <Reviews {...{ ...ratings(4, 5), svgClassName: "w-4 h-4" }} />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/2">
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/201x201" />
                            <div class="flex-grow sm:pl-8">
                                <h2 class="title-font font-medium text-lg text-gray-900">Alper Kamu</h2>
                                <h3 class="text-gray-500 mb-3">Designer</h3>
                                <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span class="inline-flex">
                                    <Reviews {...{ ...ratings(5, 5), svgClassName: "w-4 h-4" }} />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/2">
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/204x204" />
                            <div class="flex-grow sm:pl-8">
                                <h2 class="title-font font-medium text-lg text-gray-900">Atticus Finch</h2>
                                <h3 class="text-gray-500 mb-3">UI Developer</h3>
                                <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span class="inline-flex">
                                    <Reviews {...{ ...ratings(4, 5), svgClassName: "w-4 h-4" }} />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/2">
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/206x206" />
                            <div class="flex-grow sm:pl-8">
                                <h2 class="title-font font-medium text-lg text-gray-900">Henry Letham</h2>
                                <h3 class="text-gray-500 mb-3">Designer</h3>
                                <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span class="inline-flex">
                                    <Reviews {...{ ...ratings(4, 5), svgClassName: "w-4 h-4" }} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductReview