import { Sidebar } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { FaHospitalUser } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

export default function Dashsidebar() {

const { currentuser, error, loading } = useSelector(state => state.user)


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
        {currentuser && currentuser.role === 'teacher' &&(
            <Sidebar.Items>
            <Sidebar.ItemGroup>
                <Link to='/dashboard?tab=profile'>
                <Sidebar.Item as='div' className='font-semibold' active={tab === 'profile'} icon={FaHospitalUser} label={currentuser.role} labelColor='dark'>
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
    )}

{currentuser && currentuser.role === 'admin' &&(
            <Sidebar.Items>
            <Sidebar.ItemGroup>
                <Link to='/dashboard?tab=profile'>
                <Sidebar.Item as='div' className='font-semibold' active={tab === 'profile'} icon={FaHospitalUser} label={currentuser.role} labelColor='dark'>
                    profile
                </Sidebar.Item>
                </Link>

                <Link to='/dashboard?tab=createStudent'>  
                <Sidebar.Item as='div' className='font-semibold'>
                    CreateStudent
                </Sidebar.Item>
                </Link>

                <Link to='/dashboard?tab=createTeacher'>  
                <Sidebar.Item as='div'>
                    Createteacher
                </Sidebar.Item>
                </Link>
                
                <Link to='/dashboard?tab=createAdmin'>  
                <Sidebar.Item as='div'>
                    createadmin
                </Sidebar.Item>
                </Link>

                <Link to='/dashboard?tab=createNotice'>  
                <Sidebar.Item as='div'>
                    createnotice
                </Sidebar.Item>
                </Link>

                <Link to='/dashboard?tab=viewstudenttable'>  
                <Sidebar.Item as='div'>
                    viewstudenttable
                </Sidebar.Item>
                </Link>

                <Link to='/dashboard?tab=viewteachertable'>  
                <Sidebar.Item as='div'>
                    viewteachertable
                </Sidebar.Item>
                </Link>
                
                <Sidebar.Item as='div'>
                    Signout
                </Sidebar.Item>

            </Sidebar.ItemGroup>
        </Sidebar.Items>
    )}

    </Sidebar>
  )
}
