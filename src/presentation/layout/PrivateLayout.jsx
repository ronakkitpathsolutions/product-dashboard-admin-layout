import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import withAuthenticated from '../../hoc/withAuthenticated'
import Topbar from '../Topbar'

const PrivateLayout = ({ ...props }) => (
    <section className='w-full h-full' {...props} >
        <Topbar isFixed />
        <WithAuthenticatedOutlet {...props} replace {...{ to: '/' }} />
    </section>
)
export default PrivateLayout

const WithAuthenticatedOutlet = withAuthenticated(Outlet, Navigate)