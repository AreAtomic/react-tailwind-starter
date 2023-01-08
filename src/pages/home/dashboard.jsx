import { Navbar, Footer } from '../../components/organisms/index'
import { Dashboard } from '../../components/molecules/index'

const DashboardPage = (props) => {
    return (
        <>
            <div className="bg-gradient-to-b from-blue-areatomic-50 to-white-areatomic-500 px-5">
                <Navbar />
                <Dashboard />
            </div>
            <Footer />
        </>
    )
}
export default DashboardPage
