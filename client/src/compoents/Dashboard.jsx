import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Dashsidebar from './Dashsidebar'
import CreateStudent from '../pages/faculty/CreateStudent'

export default function Dashboard() {
    const location = useLocation()
    const[tab,settab] = useState('')
    useEffect(()=>{
        const urlparams = new URLSearchParams(location.search)
        const tabfromurl = urlparams.get('tab')
        if(tabfromurl){
            settab(tabfromurl)
        }
    },[location.search])
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-56'>
        {/* sidebar */}
            <Dashsidebar/>
      </div>
      {/* right side */}
        {tab === 'createStudent' && <CreateStudent/>}
    </div>
  )
}
