import React from 'react'
import empty_cart from '../../assets/empty_cart.svg'
import Button from '../../common/Forms/Button' 
import useHistory from '../../hooks/useHistory'

const EmptyCart = ({headline, message, ...props }) => {
    const history = useHistory()
    return (
        <section {...props} >
            <div className="container mx-auto flex px-5 py-4 items-center justify-center flex-col">
                <img className="animate-bounce-slow lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="empty_cart" src={empty_cart} />
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{headline}</h1>
                        <p className="mb-8 leading-relaxed">{message}</p>
                        <div className="flex justify-center">
                            <Button handleClick={() => history('/')} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" label="Start Shopping" />
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default EmptyCart