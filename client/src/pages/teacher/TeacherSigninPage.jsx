
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
    if (!formdata.email || !formdata.password) {
      return dispatch(signinfailure('please fill out all fields'))
      // console.log('all required')
    }
    try {
      dispatch(signinstart())
      await axios.post('/api/teacher/signin', formdata)
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

    <div className="bg-white dark:bg-gray-900">
      <div className="flex justify-center h-screen">
        <div className="hidden bg-cover lg:block lg:w-2/3 bg-[url('https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]" >
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 className="text-4xl font-bold text-white">Brand</h2>
              <p className="max-w-xl mt-3 text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae</p>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">Brand</h2>

              <p className="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
            </div>

            <div className="mt-8">
              <form onSubmit={handlesubmit}>
                <div>
                  <label  className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                  <input type="email" onChange={handlechange} name="email" id="email" placeholder="example@example.com" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>
                <div className="mt-6">
                  <label  className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                  <input type="password" onChange={handlechange} name="password" id="password" placeholder="Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div className="mt-6">
                  <Button gradientDuoTone='purpleToPink' 
                  className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50' 
                  type='submit' >
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
                </div>
              </form>
              {
                error && (
                  <Alert className='mt-5' color='failure'>
                    {error}
                  </Alert>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}