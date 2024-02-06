import React from 'react'
import { Link } from 'react-router-dom'

export default function SigninOptions() {
  return (
    <div>
      <Link to='/adminsignpage'>
        admin
      </Link>


      <Link to='/teachersignpage'>
        teacher
      </Link>


      <Link to='/studentsigninpage'>
        student
      </Link>
    </div>
  )
}
