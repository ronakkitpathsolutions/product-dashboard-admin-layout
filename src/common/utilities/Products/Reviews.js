import React from 'react'
import SVG from '../../svg/svg'

const Reviews = ({ rating, outOfrating, ...props }) => {
    return (
        <span {...props} className="flex items-center">
            {rating?.map(val => <SVG key={val} type="solid_star" />)}
            {outOfrating?.map(val => <SVG key={val} type="outline_star" />)}
            <span className="text-gray-600 ml-3">{rating?.length} Reviews</span>
        </span>
    )
}

export default Reviews