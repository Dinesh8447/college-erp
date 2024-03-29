import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import defaultimage from '../../assets/profile.jpg'
import axios from 'axios'
import ImageProfile from '../../compoents/ImageProfile'

export default function CreateTeacher() {
    const [formdata,setformdata] = useState({})
    const [imagefileurl,setimagefileurl] = useState(null)
    const navigate = useNavigate()


  const handlechange = (e) =>{
    setformdata({
        ...formdata,
        photourl: imagefileurl,
        [e.target.id]:e.target.value
    })
  }




  const handlesubmit = async(e) =>{
    e.preventDefault()
    try {
        axios.post('/api/admin/createteacher',formdata)
        .then(({data})=>{
            console.log('post')
            // navigate('/dashboard?tab=createstudentlogin')
        })
        .catch(e=>console.log(e))
        
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div className="max-w-2xl mx-auto bg-white ">
    <h1 className='text-center text-3xl p-3 font-bold'>Create Teacher</h1>
    <form onSubmit={handlesubmit} >
                <ImageProfile imagefileurl={imagefileurl} setimagefileurl={setimagefileurl} />

        <div className="grid gap-6 mb-6 lg:grid-cols-2">
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                <input  onChange={handlechange} type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John"  />
            </div>
    

            <div>
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
                <input  onChange={handlechange} type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="12345678"   />
            </div>


           

            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                <input  onChange={handlechange} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@rollNo.com"  />
            </div>

            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                <input  onChange={handlechange} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="****"  />
            </div>

            <div>
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Department</label>
                <input  
                onChange={handlechange} 
                type="text" 
                id="department" 
                placeholder="mca"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  />
            </div>

            <div>
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gender</label>
                <select id='gender'  onChange={handlechange}  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                    <option value="">--select Gender--</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>

        </div>

        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>

</div>
  )
}
