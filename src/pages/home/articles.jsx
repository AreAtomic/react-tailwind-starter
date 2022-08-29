import { HeadingOne } from '../../components/atoms'
import { Navbar, Footer } from '../../components/organisms/index'
import { LoopArticle } from '../../components/molecules'

const Articles = (props) => {
    return (
        <>
            <div className="bg-gradient-to-b from-blue-areatomic-50 to-white-areatomic-500 px-5">
                <Navbar />
                <div className="mt-10 py-10 px-10">
                    <HeadingOne>
                        Tous nos articles pour <br />
                        vous aider
                    </HeadingOne>
                    <div className="py-5 mt-6">
                        <section>
                            <LoopArticle repetition="3" />
                            <LoopArticle repetition="3" />
                            <LoopArticle repetition="3" />
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Articles
