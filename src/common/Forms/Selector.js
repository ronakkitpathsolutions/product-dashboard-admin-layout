import React from 'react'

const Selector = ({name, value, onChange, placeHolder, label, menuList, ...props}) => {
    return (
        <div {...props} >
            <div className="ml-6 items-center">
                {label ? <span className="mr-3">Size</span> : null}
                <div className="relative">
                    <select {...{name, value, onChange}} className="w-full rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                        {
                            menuList?.length ? <>
                                {
                                    menuList?.map(({value, name}, index) =><option key={index} value={value} >{name}</option>)
                                }
                            </> :
                            <option >No data found!</option>
                        }
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Selector