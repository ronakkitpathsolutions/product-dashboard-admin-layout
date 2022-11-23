import { useState } from 'react'
import { validation } from '../utils/validation'

const initialState = {
    email: "",
    password: ""
}

const useLogin = () => {
    const [formData, setFormData] = useState(initialState)
    const [formError, setFormError] = useState(initialState)

    const handleChange = e => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        setFormError({ ...formError, [name]: validation(name, value) })
    }

    const initialFormData = [
        {
            id: "email",
            name: "email",
            label: "Email",
            placeholder: "xyz@mail.com",
            value: formData.email,
            type: "email",
            onChange: handleChange,
            errorMessage: formError.email
        },
        {
            id: "password",
            name: "password",
            label: "Password",
            placeholder: "●●●●●●●●●●",
            value: formData.password,
            type: "password",
            onChange: handleChange,
            errorMessage: formError.password
        }
    ]

    const handleSubmit = e => {
        e.preventDefault()
        try {
            let error = {}
            Object.keys(formData).forEach(val => {
                const message = validation(val, formData[val])
                if (message) { error[val] = message }
            })
            if (Object.keys(error).length) {
                setFormError({ ...formError, ...error});
                return
            }

            console.log('formData', formData)

        } catch (error) {
            return error
        }

    }

    return { handleSubmit, initialFormData }
}

export default useLogin