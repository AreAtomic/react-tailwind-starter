import { HeadingTwo } from '../../../atoms'
import { Link } from 'react-router-dom'

export const Site = (props) => {
    return (
        <div id="Site">
            <div className="py-2">
                <HeadingTwo color="text-blue-areatomic-500">Site</HeadingTwo>
            </div>
            <Link to="/services" style={{ color: 'white' }}>
                Tous nos services
            </Link>
            <br />
            {/* <Link to="/produits" style={{ color: 'white' }}>
                Tous nos produits
            </Link>
            <br />
            <Link to="/articles" style={{ color: 'white' }}>
                Toute l'actualité
            </Link>
            <br />
            <Link to="/connexion" style={{ color: 'white' }}>
                Votre compte
            </Link> */}
        </div>
    )
}
