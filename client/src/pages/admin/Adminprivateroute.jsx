import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function Adminprivateroute() {
const { currentuser} = useSelector(state => state.user)
  return currentuser && currentuser.role === 'admin' ? <Outlet/> : <Navigate to='/adminsignpage'/>
}
