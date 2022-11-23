import React, { Suspense } from 'react'
import Loader from './common/Loader';
import Login from './presentation/Login';
import Routing from './Router/Routing';
import './style/responsive.css';

const App = () => {
  return (
    <Suspense fallback={<Loader/>} >
      <Login/>
    </Suspense>
  );
}

export default App;
