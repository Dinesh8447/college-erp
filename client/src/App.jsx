import { Route, Routes } from "react-router-dom"
import Header from "./compoents/Header"
import About from "./compoents/About"

import Createuser from "./compoents/Createuser"
import ViewStudentData from "./pages/student/ViewStudentData"
import PrivateRoute from "./compoents/PrivateRoute"
import Dashboard from "./compoents/Dashboard"
import Home from "./compoents/Home"

import StudentSignPage from './pages/student/StudentSigninPage'
import SigninOptions from "./compoents/SigninOptions"
import TeacherSignPage from './pages/teacher/TeacherSigninPage'
import AdminSigninPage from "./pages/admin/AdminSigninPage"
// const { currentuser, error, loading } = useSelector(state => state.user)


function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />


        <Route path="/signinoption" element={<SigninOptions />} />


        {/* student */}
        <Route path="/studentsigninpage" element={<StudentSignPage />} />
        <Route path="viewstudentdata" element={<ViewStudentData />} />


        {/* teacher */}
        {/* <Route path="/createuser" element={<Createuser />} /> */}
        <Route path="/teachersignpage" element={<TeacherSignPage />} />

{/* admin */}
        <Route path="/adminsignpage" element={<AdminSigninPage />} />


        {/* <Route element={<PrivateRoute />}> */}
        {/* student */}
        {/* <Route path="/viewstudentdata" element={<ViewStudentData />} /> */}
        {/* faculty */}
        
        <Route path="/dashboard?" element={<Dashboard />} />

        {/* </Route> */}
      </Route>
    </Routes>
  )
}

export default App
