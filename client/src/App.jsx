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
import TStudentDataShow from "./pages/teacher/TStudentDataShow"
import Adminprivateroute from "./pages/admin/Adminprivateroute"
import Teacherprivateroute from "./pages/teacher/Teacherprivateroute"
import Studentprivateroute from "./pages/student/studentprivateroute"
import Empty from "./compoents/empty"

// const { currentuser, error, loading } = useSelector(state => state.user)


function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />


        <Route path="/signinoption" element={<SigninOptions />} />


        {/* student */}
        {/* <Route element={<Studentprivateroute/>}> */}
        <Route path="/studentsigninpage" element={<StudentSignPage />} />
        {/* </Route> */}

        <Route path="viewstudentdata" element={<ViewStudentData />} />

        {/* teacher */}
        {/* <Route path="/createuser" element={<Createuser />} /> */}
        {/* <Route element={<Teacherprivateroute/>}>   */}
        <Route path="/teachersignpage" element={<TeacherSignPage />} />
        {/* </Route> */}

        {/* admin */}
        {/* <Route element={<Adminprivateroute/>}> */}
        <Route path="/adminsignpage" element={<AdminSigninPage />} />
        {/* </Route> */}


<Route path='/empty' element={<Empty/>}/>

        {/* <Route element={<PrivateRoute />}> */}
        {/* student */}
        {/* <Route path="/viewstudentdata" element={<ViewStudentData />} /> */}
        {/* faculty */}
        
        <Route path="/dashboard?" element={<Dashboard />} />

        {/* </Route> */}

        <Route path="/studentdatashow" element={<TStudentDataShow/>} />
      </Route>
    </Routes>
  )
}

export default App
