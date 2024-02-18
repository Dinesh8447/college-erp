import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ImageProfile from '../../compoents/ImageProfile';

export default function CreateStudent() {
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
        axios.post('/api/admin/createstudent',formdata)
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
            <h1 className='text-center text-3xl p-3 font-bold'>Create Student</h1>
            <form onSubmit={handlesubmit} >
            <ImageProfile imagefileurl={imagefileurl} setimagefileurl={setimagefileurl} />
               
                <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                        <input  onChange={handlechange} type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John"  />
                    </div>
            

                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">RollNo</label>
                        <input  onChange={handlechange} type="number" id="rollno" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="rollno"  />
                    </div>


                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
                        <input  onChange={handlechange} type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="12345678"   />
                    </div>


                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">D.O.B</label>
                        <input  onChange={handlechange} type="date" id="dob" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
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
                        <select id='department'  onChange={handlechange}  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' >
                            <option value="">--select Department--</option>
                            <option value="mca">MCA</option>
                            <option value="mba">MBA</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Arrear</label>
                        <input  onChange={handlechange} type="number" id="arrear" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                    </div>

                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gender</label>
                        <select id='gender'  onChange={handlechange}  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                            <option value="">--select Gender--</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fees</label>
                        <select id='fees'  onChange={handlechange}  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                            <option value="">--select Fees--</option>
                            <option value="paid">Padi</option>
                            <option value="unpaid">UnPaid</option>
                            <option value="pending">Pending</option>
                        </select>
                    </div>
                </div>

                <div className="mb-6">
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address</label>
                    <textarea   onChange={handlechange} id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </div>
    )
}
