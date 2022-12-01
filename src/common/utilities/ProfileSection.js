import { Menu, Transition } from '@headlessui/react'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import useProfile from '../../components/profile'
import { classNames } from '../../utils/function'
import Icon from '../Icon'
import Badge from './Badge'

const ProfileSection = ({ links, ...props }) => {

    const { linksData } = useProfile()

    return (
        <Menu {...props} as="div" className="relative">
            <div>
                <Menu.Button className="flex max-w-xs items-center rounded-full text-sm">
                    <span className="sr-only">Open user menu</span>
                    <UserCircleIcon className="h-7 w-7 cursor-pointer text-indigo-500" aria-hidden="true" />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {linksData.map(({ id, type, name, onClick, to, iconType, isShowNotification }) => (
                        <Menu.Item key={id}>
                            {({ active }) => type === "link" ?
                                <NavLink {...{ to }} className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                                    <div className='relative flex justify-start items-center' >
                                        <Icon type={iconType} className="mr-2 w-6 h-6 .text-gray-700" />
                                        <span className='text-[16px] .text-gray-700' >
                                            {name}
                                            { isShowNotification ?  <Badge className="absolute w-2 h-2 text-[12px] right-[10px] top-[2px] text-center font-bold bg-red-600 text-white rounded-full" {...{type: 'dot'}} /> : null }
                                        </span>
                                    </div>
                                </NavLink> : <div {...{ onClick }} className={classNames(active ? 'bg-gray-100' : '', 'flex justify-start items-center cursor-pointer px-4 py-2 text-sm text-gray-700')} >
                                    <Icon type={iconType} className="mr-2 w-6 h-6 .text-gray-700" /> <span className=' text-[16px] .text-gray-700' >{name}</span>
                                </div>
                            }
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default ProfileSection