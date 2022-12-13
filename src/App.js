import React, { Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import Loader from './common/Loader';
import { setLoggedUser, setLogOutUser } from './redux/action';
import Routing from './Router/routing';
import { decodeToken, isTokenActivated } from './utils/function';
import { clearLocalStorage, getDataFromLocal } from './utils/localstorage';
import "swiper/css";
import "swiper/css/effect-cards";

const App = () => {

  const token = getDataFromLocal('token')
  const dispatch = useDispatch()

  useEffect(() => {
    const isTokenActive = isTokenActivated(token)
    const decodedToken = decodeToken(token)
    if (!isTokenActive) {
      clearLocalStorage()
      dispatch(setLogOutUser({}))
    } else {
      dispatch(setLoggedUser({ token, user: decodedToken, isLogged: isTokenActive }))
    }
  }, [dispatch, token])

  return (
    <Suspense fallback={<Loader />} >
      <Routing />
    </Suspense>
  );
}

export default App;
