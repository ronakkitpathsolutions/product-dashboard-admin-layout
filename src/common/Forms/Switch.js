import React from 'react'
import { Switch } from '@headlessui/react'

const ToggleSwitch = ({checked, handleChange, enablecolor, disablecolor, ...props}) => {
return <Switch {...{checked}} {...props} className={`${checked ? enablecolor || "bg-teal-900" : disablecolor || "bg-teal-500"} relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}  >
        <span className={`${ checked ? 'translate-x-9' : 'translate-x-0' } pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}/>
  </Switch>
}

export default ToggleSwitch