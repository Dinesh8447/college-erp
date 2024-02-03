import { Route, Routes } from "react-router-dom"
import Header from "./compoents/Header"
import About from "./compoents/About"
import Signin from "./compoents/Signin"
import Createuser from "./compoents/Createuser"
import ViewStudentData from "./pages/student/ViewStudentData"


// const { currentuser, error, loading } = useSelector(state => state.user)


function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/createuser" element={<Createuser />}/>


        {/* student */}
        <Route path="/viewstudentdata" element={<ViewStudentData/>}/>

      </Route>
    </Routes>
  )
}

export default App
