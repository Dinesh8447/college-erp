import { Alert, Button, Label, Select, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'



export default function Createuser() {
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
        if (!formdata.username || !formdata.role || !formdata.password) {
            return seterror('please fill out all fields')
        }
        try {
            setloading(true)
            seterror(null)




            await axios.post('/auth/createuser', formdata)
                .then(({ data }) => {
                    setloading(false)
                    // navigate('/signin')
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
        <div className='min-h-screen mt-20'>
            <div className='flex p-3 max-w-3xl mx-auto gap-5 flex-col md:flex-row md:items-center'>
                {/* left side */}
                <div className='flex-1'>
                    <Link to={'/'} className=' text-4xl  font-bold dark:text-white'>
                        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                            AAA</span>
                        college
                    </Link>
                    <p className='text-sm mt-5 font-semibold'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Sapiente dolor numquam recusandae ratione
                        enim in ipsum explicabo eius corporis minus
                        porro sint aperiam, eligendi illo tempora cumque voluptate. Iure, aut!</p>
                </div>


                {/* right side */}
                <div className='flex-1'>
                    <form onSubmit={handlesubmit} className='flex flex-col gap-4'>
                        {/* username */}
                        <div>
                            <Label value='Username' />
                            <TextInput
                                required
                                type='text'
                                placeholder='Username'
                                id='username'
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

                        {/* role */}

                        <div>
                            <Label value='Select Role' />
                            <Select id='role' onChange={handlechange} required>
                                <option>--select user role--</option>
                                <option value='student'>Student</option>
                                <option value='falculty'>Falculty</option>
                            </Select>
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