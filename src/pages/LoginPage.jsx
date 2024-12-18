import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SignUp from '../sections/signup/SignUp'
import Login from '../sections/login/Login'

function LoginPage() {
  return (
    <div>
    <div className=" overflow-visible sm:overflow-x-clip ">
    <div className="css-1vx3a4p"></div>
    <Navbar/>
    <div className=' pt-12 mb-4'>
      <Login/>

    </div>

    <Footer/>
    </div>
</div>
  )
}

export default LoginPage