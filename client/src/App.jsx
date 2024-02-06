import { Route, Routes } from "react-router-dom"
import Header from "./compoents/Header"
import About from "./compoents/About"
import Signin from "./compoents/Signin"
import Createuser from "./compoents/Createuser"
//student
import ViewStudentData from "./pages/student/ViewStudentData"
//faculty
import FalcultyDashboard from "./pages/faculty/FalcultyDashboard"
import PrivateRoute from "./compoents/PrivateRoute"
import Dashboard from "./compoents/Dashboard"
import Home from "./compoents/Home"
import Studentloginform from "./pages/student/Studentloginform"
import Createstudentlogin from "./pages/faculty/Createstudentlogin"


// const { currentuser, error, loading } = useSelector(state => state.user)


function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Signin />} />

        <Route path="/createuser" element={<Createuser />}/>
        <Route path="/studentloginform" element={<Studentloginform />}/>
        <Route path="/createstudentlogin" element={<Createstudentlogin />}/>

<Route element={<PrivateRoute/>}>
        {/* student */}
        <Route path="/viewstudentdata" element={<ViewStudentData/>}/>
        {/* faculty */}
        <Route path="/dashboard?" element={<Dashboard/>}/>
</Route>

      </Route>
    </Routes>
  )
}

export default App
