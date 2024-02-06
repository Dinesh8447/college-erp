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
        // console.log(tabfromurl)
        if(tabfromurl){
            settab(tabfromurl)
        }
    },[location.search])



  return (
    <Sidebar className='w-full md:w-50'>
        <Sidebar.Items>
            <Sidebar.ItemGroup>
                <Link to='/dashboard?tab=profile'>
                <Sidebar.Item as='div' className='font-semibold' active={tab === 'profile'} icon={FaHospitalUser} label={'Faculty'} labelColor='dark'>
                    profile
                </Sidebar.Item>
                </Link>

                <Link to='/dashboard?tab=createStudent'>
                <Sidebar.Item as='div' className='font-semibold'>
                    CreateStudent
                </Sidebar.Item>
                </Link>

                <Sidebar.Item as='div'>
                    editstudent
                </Sidebar.Item>
                
                <Sidebar.Item as='div'>
                    viwestudents
                </Sidebar.Item>
                
                <Sidebar.Item as='div'>
                    Signout
                </Sidebar.Item>
            
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
  )
}
