import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SignUp from '../sections/signup/SignUp'

function SignupPage() {
  return (
 <div>
     <div className=" overflow-visible sm:overflow-x-clip ">
     <div className="css-1vx3a4p"></div>
     <Navbar/>
     <div className=' pt-12 mb-4'>
        <SignUp/>

     </div>

     <Footer/>
     </div>
 </div>
  )
}

export default SignupPage