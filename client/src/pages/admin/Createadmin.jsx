import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ImageProfile from '../../compoents/ImageProfile'


export default function Createadmin() {
    const [formdata, setformdata] = useState({})
    const [imagefileurl, setimagefileurl] = useState(null)
    const navigate = useNavigate()

    // console.log(formdata)


    const handlechange = (e) => {
        setformdata({
            ...formdata,
            photourl: imagefileurl,
            [e.target.id]: e.target.value
        })
    }

    const handlesubmit = async (e) => {
        e.preventDefault()
        try {
            axios.post('/api/admin/auth/adminregister', formdata)
                .then(({ data }) => {
                    console.log(data)
                    // navigate('/dashboard?tab=createstudentlogin')
                })
                .catch(e => console.log(e))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="max-w-2xl mx-auto bg-white ">
            <h1 className='text-center text-3xl p-3 font-bold'>Create Admin</h1>
            <form onSubmit={handlesubmit} >
                <ImageProfile imagefileurl={imagefileurl} setimagefileurl={setimagefileurl} />
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">UserName</label>
                    <input onChange={handlechange} type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                    <input onChange={handlechange} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="****" />
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    )
}
