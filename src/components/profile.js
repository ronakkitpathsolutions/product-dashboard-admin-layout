import { useState } from 'react'
import { useDispatch } from 'react-redux'
import useHistory from '../hooks/useHistory'
import { setLogOutUser } from '../redux/action'
import { clearLocalStorage } from '../utils/localstorage'

const initialState = {

}

const useProfile = (otherData) => {

    const dispatch = useDispatch()
    const history = useHistory()
    const [formData, setFormData] = useState(initialState)

    const handleLogOut = () => {
        clearLocalStorage()
        dispatch(setLogOutUser())
        history('/')
    }

    const linksData = [
        {
            id: "wishlists",
            name: "Wishlists",
            type: "link",
            to: "/wish-lists",
            iconType: "heart"
        },
        {
            id: "orders",
            name: "Orders",
            type: "link",
            to: "/orders",
            iconType: "orders"
        },
        {
            id: "log_out",
            name: "Logout",
            type: "button",
            iconType: "logout",
            onClick: handleLogOut
        }
    ]

    return { formData, handleLogOut, linksData, setFormData }
}

export default useProfile