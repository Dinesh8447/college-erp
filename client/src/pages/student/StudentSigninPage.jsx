
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { signinfailure, signinstart, signinsuccess } from '../../redux/user/userslice.js'
import { useDispatch, useSelector } from 'react-redux'

export default function Signin() {
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
    if (!formdata.rollno || !formdata.password) {
      return dispatch(signinfailure('please fill out all fields'))
      // console.log('all required')
    }
    try {
      dispatch(signinstart())
      await axios.post('/api/student/signin', formdata)
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
<div>
        <div className="h-screen flex">
        <div className="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center">
          <div>
            <h1 className="text-white font-bold text-4xl font-sans">AAA College</h1>
            <p className="text-white mt-1">Lorem ipsum dolor sit amet.</p>
            <button type="submit" className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
          </div>
        </div>
        <div className="flex w-1/2 justify-center items-center bg-white">
          <form onSubmit={handlesubmit}  className="bg-white">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">Student Login</h1>
            <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
              <input className="pl-2 outline-none  border-none"
               type="text"
               placeholder='201102'
               id='rollno'
               onChange={handlechange} />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
              </svg>
              <input className="pl-2 outline-none border-none"  type='password'
                 placeholder='Password'
                 id='password'
                 onChange={handlechange}
                  />
            </div>
            <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">
            {
                 loading ? (
                   <>
                     <Spinner size='sm' />
                     <span className='pl-3'>Loading...</span>
                   </>
                 )
                   : "Sign In"
               }      
              </button>
              {
             error && (
              <Alert className='mt-5' color='failure'>
                 {error}
               </Alert>
             )
           }
          </form>
          
        </div>
        
      </div>
     
</div>
   
  )
}