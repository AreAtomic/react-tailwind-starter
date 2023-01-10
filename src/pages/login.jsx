import { Navbar, Footer } from '../components/organisms/index'
import { LoginForm } from '../components/molecules/index'

const Login = (props) => {
    return (
        <>
            <Navbar />
            <div className="bg-gradient-to-b from-blue-areatomic-50 to-white-areatomic-500 px-5">
                <div className="py-10 md:px-10 px-3">
                    <LoginForm />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login
