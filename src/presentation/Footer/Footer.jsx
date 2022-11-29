import React from 'react'
import { NavLink } from 'react-router-dom'
import useFooter from '../../common/footer'
import Button from '../../common/Forms/Button'
import Input from '../../common/Forms/Input'
import SVG from '../../common/svg/svg'
import { footer_links, socialLinks } from '../../constant'
import Logo from '../Logo'

const Footer = ({ ...props }) => {

    const { handleSubmit, formData } = useFooter()

    return (
        <footer {...props}>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap md:text-left text-center order-first">
                    {footer_links.map(data => {
                        return (
                            <div key={data?.id} className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-semibold text-[1rem] text-gray-900 tracking-widest mb-3">{data?.label?.toUpperCase()}</h2>
                                <nav className="list-none mb-10">
                                    {
                                        data.links?.map(({ id, to, label }) => <li key={id} ><NavLink {...{ to }} >{label}</NavLink></li>)
                                    }
                                </nav>
                            </div>
                        )
                    })}
                    <div className="lg:w-1/4 md:w-1/2 w-full 2xs:px-0 md:px-4">
                        <h2 className="title-font font-semibold text-[1rem] text-gray-900 tracking-widest mb-3">SUBSCRIBE</h2>
                        <div className="flex lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                            <div className="relative w-40 2xs:w-full xs:w-full sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                { formData.map(({id, ...otherData}) => <Input className="w-full sm:text-left  mb-3 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4"
                                inputClass="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  key={id} {...otherData} />) }
                            </div>
                            <p className="text-gray-500 text-sm mt-2 md:text-left text-center">Receive letest news and exclusive products.</p>
                            <Button handleClick={handleSubmit} {...{label: 'Subscribe', type: "submit"}} className="lg:mt-2 mt-0 2xs:mt-4 md:mt-0 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"/>
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