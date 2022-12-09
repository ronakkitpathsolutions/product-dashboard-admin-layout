import { lazy } from "react"
import Wishlists from "../presentation/wishlists/Wishlists"
import { retry } from "../utils/function"

const Login = lazy(() => retry(() => import("../presentation/Login")))
const Signup = lazy(() => retry(() => import("../presentation/Signup")))
const ForgotPassword = lazy(() => retry(() => import("../presentation/ForgotPassword")))
const Landing = lazy(() => retry(() => import("../presentation/Landing")))
const Overview = lazy(() => retry(() => import("../presentation/product/Overview")))
const Cart = lazy(() => retry(() => import("../presentation/cart/Cart")))

export const route = [
    {
        id: "product_page",
        path: "/",
        public: true,
        element: <Landing />,
    },
    {
        id: "product_overview",
        path: "/product-overview/:id",
        public: true,
        element: <Overview />,
    },
    {
        id: "login_page",
        path: "/login",
        isAuth: true,
        element: <Login />,
    },
    {
        id: "forgot_password",
        path: "/forgot-password",
        isAuth: true,
        element: <ForgotPassword />,
    },
    {
        id: "signup_page",
        path: "/signup",
        isAuth: true,
        element: <Signup />,
    },
    {
        id: "user_cart_page",
        path: "/add-to-cart/:id",
        isPrivate: true,
        element: <Cart/>,
        access: ['user']
    },
    {
        id: "user_cart_page",
        path: "/wish-lists",
        isPrivate: true,
        element: <Wishlists/>,
        access: ['user']
    }
]

export const isAccessableRoutes = (data, role) => data.map(value => value === role).some(val => val)
export const publicRoutes = isPublic => route.filter(data => data.public === isPublic)
export const authRoutes = isAuth => route.filter(data => data.isAuth === isAuth)
export const userPrivateRoutes = (role) => route.filter((data) => data.isPrivate ? isAccessableRoutes(data.access, role) : null)