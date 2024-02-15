import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function Studentprivateroute() {
const { currentuser} = useSelector(state => state.user)
  return currentuser && currentuser.role === 'student' ? <Outlet/> : <Navigate to='/studentsigninpage'/>
}
