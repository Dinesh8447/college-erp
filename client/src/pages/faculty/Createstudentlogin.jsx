import { Alert, Button, Label, Select, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'



export default function Createstudentlogin() {
    const [formdata, setformdata] = useState({})
    const [error, seterror] = useState(null)
    const [loading, setloading] = useState(false)

    // console.log(formdata)

    const handlechange = (e) => {
        setformdata({
            ...formdata,
            [e.target.id]: e.target.value.trim()
        })
    }


    const handlesubmit = async (e) => {
        e.preventDefault()
        if (!formdata.rollno || !formdata.password) {
            return seterror('please fill out all fields')
        }
        try {
            setloading(true)
            seterror(null)
            await axios.post('/api/auth/createuser', formdata)
                .then(({ data }) => {
                    setloading(false)
                    navigate('/dashboard?tab=createStudent')
                    console.log(data)
                })
                .catch(e => {
                    console.log(e)
                })
        } catch (error) {
            // client side error eg: internet connection
            seterror(error.message)
        }

    }




    return (
        <div className=' w-96 m-auto'>
            <div className='flex p-3 gap-5  md:flex-row md:items-center'>
                {/* left side */}
                <div className='flex-1'>
                    <p className='text-2xl mt-5  font-bold'>
                       create login id for this student 
                    </p>
                </div>

                {/* right side */}
                <div className='flex-1'>
                    <form onSubmit={handlesubmit} className='flex flex-col gap-4'>
                       {/* rollno */}
                       <div>
                            <Label value='rollno'/>
                            <TextInput
                                required
                                type='number'
                                placeholder='RollNo'
                                id='rollno'
                                onChange={handlechange}
                            />
                        </div>

                        {/* password */}
                        <div>
                            <Label value='Password' />
                            <TextInput
                                required
                                type='password'
                                placeholder='Password'
                                id='password'
                                onChange={handlechange}
                            />
                        </div>


                        <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
                            {
                                loading ? (
                                    <>
                                        <Spinner size='sm' />
                                        <span className='pl-3'>Loading...</span>
                                    </>
                                )
                                    : "Create User"
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