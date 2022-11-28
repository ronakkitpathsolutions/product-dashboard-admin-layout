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
            id: "profile",
            name: "Profile",
            type: "link",
            to: "/profile"
        },
        {
            id: "log_out",
            name: "Logout",
            type: "button",
            onClick: handleLogOut
        }
    ]

    return { formData, handleLogOut, linksData }
}

export default useProfile