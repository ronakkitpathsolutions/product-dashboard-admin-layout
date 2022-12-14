import { useEffect, useState } from 'react'
import axios from '../apis/index'

const intialFetch = {
    data: null,
    isLoading: false,
    error: null
}

const useFetch = (url, method = "get", config = {}, isHold = false) => {
    const [fetch, setFetch] = useState(intialFetch)
    const { data, isLoading, error } = fetch

    useEffect(() => {
        !isHold && refetch()
        // eslint-disable-next-line
    }, [isHold])

    const refetch = async () => await handleFetch()

    const handleFetch = async () => {
        setFetch({ ...intialFetch, isLoading: true })
        try {
            const response = await axios[method](url, config)
            if (response.data) {
                setFetch({ ...intialFetch, isLoading: false, data: response.data })
            }
        } catch (error) {
            if (error.response) {
                const { data } = error.response
                setFetch({ ...intialFetch, isLoading: false, error: data })
            }
        }
    }

    return { data, isLoading, error, refetch }
}

export default useFetch