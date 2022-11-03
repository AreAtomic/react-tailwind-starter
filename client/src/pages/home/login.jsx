import { Navbar, Footer } from '../../components/organisms/index'
import { LoginForm } from '../../components/molecules/index'

const Login = (props) => {

return (
  <>
     <div className="bg-gradient-to-b from-blue-areatomic-50 to-white-areatomic-500 px-5">
      <Navbar />
      <LoginForm/>
      </div>
    <Footer/>
  </>
      
    );
  }

export default Login;