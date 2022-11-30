import { useEffect, useState } from 'react'
import axios from '../apis/index'

const intialFetch = {
    data: null,
    isLoading: false,
    error: null
}

const useFetch = (url = "/", config = {}) => {
    const [fetch, setFetch] = useState(intialFetch)
    const { data, isLoading, error } = fetch

    useEffect(() => {
        refetch()
        // eslint-disable-next-line
    }, [])

    const refetch = async() => await handleFetch()

    const handleFetch = async() => {
        setFetch({ ...intialFetch, isLoading: true })
        try {
            const response = await axios.get(url, config)
            if(response.data){
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