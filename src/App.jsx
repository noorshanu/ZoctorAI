
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
   <>
       <Router>
     
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
          <Route path="/signup" element={<SignupPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>

        </Routes>
      </div>
    </Router>
   </>
  )
}

export default App