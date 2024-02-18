import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Dashsidebar from './Dashsidebar'
import CreateStudent from '../pages/teacher/CreateStudent'
import CreateTeacher from '../pages/admin/CreateTeacher'
import Createadmin from '../pages/admin/Createadmin'
import Createnotice from '../pages/admin/Createnotice'
import ViewStudentTable from './ViewStudentTable'


export default function Dashboard() {
  const location = useLocation()
  const [tab, settab] = useState('')
  useEffect(() => {
    const urlparams = new URLSearchParams(location.search)
    const tabfromurl = urlparams.get('tab')
    if (tabfromurl) {
      settab(tabfromurl)
    }
  }, [location.search])
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-56'>
        {/*left sidebar */}
        <Dashsidebar />
      </div>
      {/* right side */}
      {tab === 'createStudent' && <CreateStudent />}
      {tab === 'createTeacher' && <CreateTeacher/>}
      {tab === 'createAdmin' && <Createadmin/>}
      {tab === 'createNotice' && <Createnotice/>}
      {tab === 'viewstudenttable' && <ViewStudentTable/>}

    </div>
  )
}
