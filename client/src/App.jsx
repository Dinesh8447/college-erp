import { Route, Routes } from "react-router-dom"
import Header from "./compoents/Header"
import About from "./compoents/About"
import Signin from "./compoents/Signin"
import Createuser from "./compoents/Createuser"




function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/createuser" element={<Createuser />}/>
      </Route>
    </Routes>
  )
}

export default App
