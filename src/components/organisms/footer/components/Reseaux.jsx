import { HeadingTwo } from '../../../atoms'

export const Reseaux = (props) => {
    return (
        <div id="Reseaux">
            <div className="py-2">
                <HeadingTwo color="text-blue-areatomic-500">
                    Nos réseaux
                </HeadingTwo>
            </div>
            <a
                href="https://www.instagram.com/areatomic/"
                style={{ color: 'white' }}
            >
                Instagram
            </a>
            <br />
            <a href="https://tealfeed.com/areatomic" style={{ color: 'white' }}>
                Tealfeed
            </a>
            <br />
            <a
                href="https://www.linkedin.com/company/areatomic/about/"
                style={{ color: 'white' }}
            >
                Linkedin
            </a>
        </div>
    )
}
