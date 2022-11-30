import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AuthLayout from '../presentation/layout/AuthLayout'
import PrivateLayout from '../presentation/layout/PrivateLayout'
import PublicLayout from '../presentation/layout/PublicLayout'
import NotFound from '../presentation/NotFound'
import { authRoutes, publicRoutes, userPrivateRoutes } from './routes'

const Routing = ({ ...props }) => {
  const user = useSelector(({ userData }) => userData?.user)

  return (
    <Routes {...props} >
      <Route path='/' element={<PublicLayout isDefaultAccess />} >
        {publicRoutes(true).map(({ id, ...otherProps }) => <Route index key={id} {...otherProps} />)}
      </Route>
      <Route path='/' element={<AuthLayout />} >
        {authRoutes(true).map(({ id, ...otherProps }) => <Route index key={id} {...otherProps} />)}
      </Route>
      <Route path='/' element={<PrivateLayout />} >
        {userPrivateRoutes(user?.role).map(({ id, ...otherProps }) => <Route index key={id} {...otherProps} />)}
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Routing