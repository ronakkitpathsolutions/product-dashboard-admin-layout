import { useState } from 'react'
import { validation } from '../utils/validation'

const initialState = {
    email: ""
}

const useFooter = (otherData) => {

    const [subscribeData, setSubscribeData] = useState(initialState)
    const [error, setError] = useState(initialState)

    const handleChange = e => {
        const { name, value } = e.target
        setSubscribeData({ ...subscribeData, [name]: value })
        setError({ ...error, [name]: validation(name, value) })
    }

    const formData = [
        {
            id: "email",
            name: "email",
            placeholder: "Receive letest exclusive products.",
            value: subscribeData.email,
            type: "email",
            onChange: handleChange,
            errorMessage: error.email
        },
    ]

    const handleSubmit = e => {
        e.preventDefault()
        try {
            let errorObj = {}
            Object.keys(subscribeData).forEach(val => {
                const message = validation(val, subscribeData[val])
                if(message){ errorObj[val] = message }
            })

            if (Object.keys(errorObj).length) {
                setError({ ...error, ...errorObj });
                return
            }

            //API calling
            
        } catch (error) {
            return error
        }
    }

  return { handleSubmit, formData }
}

export default useFooter