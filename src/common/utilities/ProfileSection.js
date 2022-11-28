import { Menu, Transition } from '@headlessui/react'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import React, { Fragment } from 'react'
import { classNames } from '../../utils/function'

const ProfileSection = () => {
    return (
        <Menu as="div" className="relative">
            <div>
                <Menu.Button className="flex max-w-xs items-center rounded-full text-sm">
                    <span className="sr-only">Open user menu</span>
                    <UserCircleIcon className="h-7 w-7 cursor-pointer" aria-hidden="true" />
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {[{ name: "Profile", href: "/user-profile" }].map((item) => (
                        <Menu.Item key={item.name}>
                            {({ active }) => (
                                <a
                                    href={item.href}
                                    className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                >
                                    {item.name}
                                </a>
                            )}
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default ProfileSection