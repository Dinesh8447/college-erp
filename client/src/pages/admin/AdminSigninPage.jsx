
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
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto gap-5 flex-col md:flex-row md:items-center'>
        {/* left side */}
        <div className='flex-1'>
          <Link to={'/'} className=' text-4xl  font-bold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Mern</span>Blog
          </Link>
          <p className='text-sm mt-5 font-semibold'>
          admin signin page
          </p>
        </div>


        {/* right side */}
        <div className='flex-1'>
          <form onSubmit={handlesubmit} className='flex flex-col gap-4'>
            {/* email */}
            <div>
              <Label value='Username' />
              <TextInput
                type='text'
                placeholder='admin23'
                id='username'
                onChange={handlechange}
              />
            </div>

            {/* password */}
            <div>
              <Label value='Password' />
              <TextInput
                type='password'
                placeholder='Password'
                id='password'
                onChange={handlechange}
              />
            </div>

            <Button gradientDuoTone='purpleToPink' type='submit' >
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
  )
}