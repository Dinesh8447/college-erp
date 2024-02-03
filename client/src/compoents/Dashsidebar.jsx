import { Sidebar } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { FaHospitalUser } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

export default function Dashsidebar() {

    const location = useLocation()
    const[tab,settab] = useState('')
    useEffect(()=>{
        const urlparams = new URLSearchParams(location.search)
        const tabfromurl = urlparams.get('tab')
        console.log(tabfromurl)
        if(tabfromurl){
            settab(tabfromurl)
        }
    },[location.search])



  return (
    <Sidebar className='w-full md:w-50'>
        <Sidebar.Items>
            <Sidebar.ItemGroup>
                <Link to='/dashboard?tab=profile'>
                <Sidebar.Item className='font-semibold' active={tab === 'profile'} icon={FaHospitalUser} label={'Faculty'} labelColor='dark'>
                    profile
                </Sidebar.Item>
                </Link>

                <Link to='/dashboard?tab=createStudent'>
                <Sidebar.Item className='font-semibold'>
                    CreateStudent
                </Sidebar.Item>
                </Link>

                <Sidebar.Item>
                    editstudent
                </Sidebar.Item>
                
                <Sidebar.Item>
                    viwestudents
                </Sidebar.Item>
                
                <Sidebar.Item>
                    Signout
                </Sidebar.Item>
            
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
  )
}
