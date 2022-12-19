import React from 'react'
import { classNames } from '../../../utils/function'
import SVG from '../../svg/svg'

const Reviews = ({ rating, outOfrating, svgClassName, isCustomHeadline, ...props }) => {
    return (
        <span {...props} className="flex items-center">
            {rating?.map(val => <SVG {...{svgClassName: classNames(svgClassName, 'text-indigo-500')}} key={val} type="solid_star" />)}
            {outOfrating?.map(val => <SVG key={val} {...{svgClassName: classNames(svgClassName, 'text-gray-500')}} type="outline_star" />)}
            {!isCustomHeadline ? <span className="text-gray-600 ml-3">{rating?.length} out of {5}</span> : null}
        </span>
    )
}

export default Reviews