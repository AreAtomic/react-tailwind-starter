import { HeadingTwo } from '../../atoms/headings'
import { Link } from 'react-router-dom'

export const Donnees = (props) => {
    return (
        <div id="donnees" className="py-10">
            <div className="py-2">
                <HeadingTwo color="text-blue-areatomic-500">Données</HeadingTwo>
            </div>
            <Link to="/" style={{ color: 'white' }}>
                Conditions générales de vente
            </Link>
            <br />
            <Link to="/" style={{ color: 'white' }}>
                Newsletter
            </Link>
            <br />
            <Link to="/" style={{ color: 'white' }}>
                Gestion des données
            </Link>
            <br />
            <Link to="/" style={{ color: 'white' }}>
                Entreprise
            </Link>
        </div>
    )
}
