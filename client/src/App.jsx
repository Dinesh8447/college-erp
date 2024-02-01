import { Route, Routes } from "react-router-dom"
import Header from "./compoents/Header"
import About from "./compoents/About"
import Signin from "./compoents/Signin"
import Signup from "./compoents/Signup"

function App() {
  return (
   <Routes>
    <Route path="/" element={<Header/>}>
      <Route path="about" element={<About/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/signup" element={<Signup/>} />


    </Route>
   </Routes>
  )
}

export default App
