
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { signinfailure, signinstart, signinsuccess } from '../../redux/user/userslice.js'
import { useDispatch, useSelector } from 'react-redux'

export default function AdminSigninPage() {
  const [formdata, setformdata] = useState({})
  const { error, loading } = useSelector(state => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handlechange = (e) => {
    setformdata({
      ...formdata,
      [e.target.id]: e.target.value.trim()
    })
  }


  const handlesubmit = async (e) => {
    e.preventDefault()
    if (!formdata.username || !formdata.password) {
      return dispatch(signinfailure('please fill out all fields'))
      // console.log('all required')
    }
    try {
      dispatch(signinstart())
      await axios.post('api/admin/auth/adminregister', formdata)
        .then(({ data }) => {
          dispatch(signinsuccess(data))
          navigate('/')
          // console.log(data)
        })
        .catch(e => {
          if (e.response.data.success === false) {
            dispatch(signinfailure(e.response.data.message))
          }
          console.log(e)
        })
    } catch (error) {
      // client side error eg: internet connection
      dispatch(signinfailure(error.message))
    }

  }
  return (
    <div className="w-full min-h-screen bg-cover  flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-[url('https://smit.edu.in/engineering/wp-content/uploads/2019/04/abtus.jpg')]">
      <div className="w-full sm:max-w-md p-5 mx-auto">
        <h2 className="mb-12 text-center text-black text-4xl font-extrabold">Admin Login </h2>
        <form onSubmit={handlesubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-semibold  text-white" for="email">UserName</label>
            <input type='text'
              placeholder='admin23'
              id='username'
              onChange={handlechange}
              className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold text-white" for="password">Password</label>
            <input type='password'
              placeholder='Password'
              id='password'
              onChange={handlechange}
              className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
          </div>

          <Button className="w-full " gradientDuoTone='purpleToPink' type='submit' >
            {
              loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              )
                : "Sign In"
            }
          </Button>
        </form>
      </div>
    </div>
  )
}