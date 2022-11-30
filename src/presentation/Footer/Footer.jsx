import React from 'react'
import { NavLink } from 'react-router-dom'
import useFooter from '../../common/footer'
import Button from '../../common/Forms/Button'
import Input from '../../common/Forms/Input'
import SVG from '../../common/svg/svg'
import Spinner from '../../common/utilities/Spinner'
import { footer_links, socialLinks } from '../../constant'
import Logo from '../Logo'

const Footer = ({isLoading, ...props }) => {

    const { handleSubmit, formData } = useFooter()

    return (
        <footer {...props}>
            <div className="px-5 py-24 mx-auto lg:mx-4 xl:mx-16">
                <div className="flex flex-wrap md:text-left text-center order-first">
                    {footer_links.map(data => {
                        return (
                            <div key={data?.id} className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-bold text-[1rem] text-gray-700 tracking-widest mb-3">{data?.label?.toUpperCase()}</h2>
                                <nav className="list-none mb-10">
                                    {
                                        data.links?.map(({ id, to, label }) => <li key={id} ><NavLink {...{ to }} >{label}</NavLink></li>)
                                    }
                                </nav>
                            </div>
                        )
                    })}
                    <div className="lg:w-1/4 md:w-1/2 w-full 2xs:px-0 md-px-0 xl:px-4">
                        <h2 className="title-font font-bold text-[1rem] text-gray-700 tracking-widest mb-3">SUBSCRIBE</h2>
                        <div className='w-auto md:w-[320px] lg:w-[260px] xl:w-[320px]' >
                            {formData.map(({ id, ...otherData }) => <Input inputClass="md:w-full 2xs:w-full xs:w-[320px] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" className="mb-3 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4 block xs:flex md:block flex-col items-center" key={id} {...otherData} />)}
                            <Button handleClick={handleSubmit} disabled={isLoading} className="2xs:mx-auto md:ml-0 flex justify-center items-center text-white w-[140px] bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                {isLoading ? "Loading" : "Subscribe"}{isLoading ? <Spinner spinnerStyle="ml-1 -mt-[3px] w-4 h-4" /> : null}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                    <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <Logo className="flex justify-center items-center" />
                    </div>
                    <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© {new Date().getFullYear()} Nova Handicrafts
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        {socialLinks.map(({ type, id }) => <div key={id} className='ml-3 text-gray-500'><SVG {...{ type }} /></div>)}
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer