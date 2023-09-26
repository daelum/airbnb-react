import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HouseCreate from './pages/HouseCreate'
// import House from './pages/House'
// import EditHouse from './pages/EditHouse'
// import Profile from './pages/Profile'
// import Houses from './pages/Houses'
// import Login from './pages/Login'
// import SignUp from './pages/SignUp'

export default function App() {



  return (
    <BrowserRouter>
      <Routes>
          <Route path="" element={<Houses />} />
          <Route path="" element={<House />} />
          <Route path="" element={<HouseCreate />} />
          <Route path="" element={<EditHouse />} />
          <Route path="" element={<Profile />} />
          <Route path="" element={<Login />} />
          <Route path="" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  ) 
}
