import { Navbar, Footer } from '../../components/organisms/index'
import { RegisterForm } from '../../components/molecules/index'

const Register = (props) => {
    return (
        <>
            <div className="bg-gradient-to-b from-blue-areatomic-50 to-white-areatomic-500 px-5">
                <Navbar />
                <RegisterForm />
            </div>
            <Footer />
        </>
    )
}
export default Register
