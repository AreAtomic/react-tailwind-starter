import { Navbar, Footer } from '../components/organisms'
import { RegisterForm } from '../components/molecules'

const Register = (props) => {
    return (
        <>
            <Navbar />
            <div className="bg-gradient-to-b from-blue-areatomic-50 to-white-areatomic-500 px-5">
                <div className="py-10 md:px-10 px-3">
                    <RegisterForm />
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Register
