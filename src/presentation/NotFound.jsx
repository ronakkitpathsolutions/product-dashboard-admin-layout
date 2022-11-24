import React from 'react'

const NotFound = ({ ...props }) => {
    return (
        <div className='flex items-center w-screen h-screen justify-center' {...props}>
            <img
                className='animate-pulse w-3/5 2xl:w-2/5 lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-3/5'
                alt='not-found'
                src="./assets/not_found.svg" />
        </div>
    )
}

export default NotFound