import React from 'react'
import { Switch } from '@headlessui/react'

const ToggleSwitch = ({checked, handleChange, enablecolor, disablecolor, ...props}) => {
return <Switch {...{checked}} {...props} className={`${checked ? enablecolor : disablecolor} relative inline-flex h-6 w-11 items-center rounded-full`}  >
        <span className={`${ checked ? 'translate-x-6' : 'translate-x-1' } inline-block h-4 w-4 transform rounded-full bg-white transition`}/>
  </Switch>
}

export default ToggleSwitch