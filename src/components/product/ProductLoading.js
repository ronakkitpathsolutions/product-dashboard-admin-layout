import React from 'react'

const ProductLoading = ({loading}) => {
    return (
        <div className='flex flex-col 2xs:w-3/5 mx-auto 2xs:h-[200px] sm:h-[380px] animate-bounce-slow justify-center items-center w-full h-[350px]' >
            <img src={loading} alt="loading" />
        </div>
    )
}

export default ProductLoading