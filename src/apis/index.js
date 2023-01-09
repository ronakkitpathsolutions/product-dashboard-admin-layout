import axios from "axios"
import { handleLogout } from "../utils/function";

const instance = axios.create({
    baseURL: "http://localhost:4000/api"
    // baseURL: `${process.env.REACT_APP_API_SERVER_URL}`
})

instance.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem("token")
        config.headers.Accept = "application/json";
        config.headers['token'] = token;
        config.headers["Content-Type"] = "application/json";
        return config
    },
    error => Promise.reject(error)
)

instance.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (
            [401, 402, 403].includes(error.response.status)
        ) {
            handleLogout()
        }
        return Promise.reject(error)
    }
)

export default instance
