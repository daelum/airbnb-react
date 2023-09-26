import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Houses from './pages/Houses'
import House from './pages/House'
import HouseCreate from './pages/HouseCreate'
import EditHouse from './pages/EditHouse'
import Profile from './pages/Profile'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Houses />} />
        <Route path="/House" element={<House />} />
        <Route path="/HouseCreate" element={<HouseCreate />} />
        <Route path="/EditHouse" element={<EditHouse />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}
