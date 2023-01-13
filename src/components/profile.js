import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useHistory from '../hooks/useHistory'
import { setLogOutUser } from '../redux/action'
import { clearLocalStorage } from '../utils/localstorage'

const initialState = {

}

const useProfile = (otherData) => {

    const wishlistsData = useSelector(({wishlistReducer}) => wishlistReducer.wishlists)
    const dispatch = useDispatch()
    const history = useHistory()
    const [formData, setFormData] = useState(initialState)

    const handleLogOut = () => {
        clearLocalStorage()
        dispatch(setLogOutUser())
        history('/')
    }

    const isShowNotification = useMemo(() => {
        return Object.values(wishlistsData).some(val => val)
    },[wishlistsData])

    const linksData = [
        {
            id: "wishlists",
            name: "Wishlists",
            type: "link",
            to: "/wish-lists",
            iconType: "heart",
            isShowNotification
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