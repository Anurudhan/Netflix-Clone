
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import { AuthContextProvider } from './context/AuthContext'
import Login from './components/pages/LogIn'
import SignUp from './components/pages/SignUp'
import Account from './components/pages/Account'
import ProtectedRoute from './components/ProtectedRoute'




function App() {

  return (
    <>
    <AuthContextProvider>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element = {<Login />} />   
      <Route path='/signUp' element = {< SignUp />} />
      <Route path='/account' element = {<ProtectedRoute >< Account /></ProtectedRoute >} />
    </Routes>
      

    </AuthContextProvider>
    
    </>
  )
}

export default App
