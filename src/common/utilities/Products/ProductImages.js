import React from 'react'
import { classNames } from '../../../utils/function'

const ProductImages = ({ images, handleShowCase, mainImage, ...props }) => {
    return (
        <div {...props}>
            {images?.map(({ key, src }, index) => <div onClick={() => handleShowCase(index + 1)} key={index} className={classNames(images?.length < 3 ? "mr-2 mb-4" : "mx-auto")}>
                <img src={src} className="w-[100px] mx-auto cursor-pointer" alt={key} />
            </div>)}
        </div>
    )
}

export default ProductImages