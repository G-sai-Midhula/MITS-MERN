import React from 'react'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Counter from './component/Counter'
import UseState from './Hooks/UseState'
import UseEffect from './Hooks/UseEffect'
import UseEffectApi from './Hooks/UseEffectApi'
import Hook from './Hooks/Hook'
import UseRef from './Hooks/UseRef'
import Login from './Auth/Login'
import Signup from './Auth/Signup'
import { Route, Routes } from 'react-router-dom'
import UseReducer from './Hooks/UseReducer'

const App = () => {
  const name = "Vikraam";   // ✅ DEFINE NAME HERE

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/home' element={<Home name={name} />} />
        <Route path='/about' element={<About name={name} />} />
        <Route path='/contact' element={<Contact name={name} />} />
        <Route path='/service' element={<Service name={name} />} />

        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />

        <Route path='/hook' element={<Hook />}>
          <Route path='usestate' element={<UseState />} />
          <Route path='useeffect' element={<UseEffect />} />
          <Route path='useeffectapi' element={<UseEffectApi />} />
          <Route path='useref' element={<UseRef />} />
          <Route path='usereducer' element={<UseReducer />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App