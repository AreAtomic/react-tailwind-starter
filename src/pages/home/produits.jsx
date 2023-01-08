import { HeadingOne } from '../../components/atoms'
import { Navbar, Footer } from '../../components/organisms/index'
import { LoopProduct } from '../../components/molecules'

const Produits = (props) => {
    return (
        <>
            <div className="bg-gradient-to-b from-blue-areatomic-50 to-white-areatomic-500 px-5">
                <Navbar />
                <div className="mt-10 py-10 px-10">
                    <HeadingOne>
                        Nos produits pour vous <br />
                        faire décoller
                    </HeadingOne>
                    <div className="py-5 mt-6">
                        <section>
                            <LoopProduct repetition="3" />
                            <LoopProduct repetition="3" />
                            <LoopProduct repetition="3" />
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Produits
