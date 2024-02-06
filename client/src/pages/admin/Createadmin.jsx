import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import defaultimage from '../../assets/profile.jpg'
import axios from 'axios'



export default function Createadmin() {

    const [formdata, setformdata] = useState({})
    const [imagefile, setimagefile] = useState(null)
    const [imagefileurl, setimagefileurl] = useState(null)
    const filepickerref = useRef()
    const navigate = useNavigate()
    // console.log(imagefile)
    // console.log(imagefileurl)
    // console.log(formdata)

    const handleimagechange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setimagefile(file)
            setimagefileurl(URL.createObjectURL(file))
        }
    }

    const handlechange = (e) => {
        setformdata({
            ...formdata,
            [e.target.id]: e.target.value
        })
    }

    const handlesubmit = async (e) => {
        e.preventDefault()
        try {
            axios.post('/api/admin/auth/adminregister', formdata)
                .then(({ data }) => {
                    console.log('post')
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
            <input type="file" accept='image/*' hidden ref={filepickerref} onChange={handleimagechange} />
            <div className=" flex  justify-center  cursor-pointer overflow-hidden">
                <img onClick={() => filepickerref.current.click()} className='rounded-full w-40 h-40 m-3 object-cover border-8 border-[lightgray] ' src={imagefileurl || defaultimage} alt="img" />
            </div>
            
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
