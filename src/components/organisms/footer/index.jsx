import { HeadingTwo } from '../../atoms/headings'
import { ContactForm } from '../../molecules'
import { Contact, Donnees, Site, DernierArticle, Reseaux } from './components/'

export const Footer = (props) => {
    return (
        <footer>
            <div className="bg-component-500 px-10 py-5 grid md:flex justify-around ">
                <div id="ContactDonnes">
                    <Contact />
                    {/* <Donnees /> */}
                </div>
                <Site />
                <Reseaux />
                <div
                    id="ContactForm"
                    className="max-w-card md:max-w-sm w-screen"
                >
                    <div className="py-2">
                        <HeadingTwo color="text-blue-areatomic-500">
                            Nous contacter
                        </HeadingTwo>
                    </div>
                    <ContactForm />
                </div>
                {/* <DernierArticle /> */}
            </div>
        </footer>
    )
}
