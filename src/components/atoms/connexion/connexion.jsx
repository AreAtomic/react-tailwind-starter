import {Link} from "react-router-dom"
import { ButtonPrimary,ButtonSecondary } from '../buttons';

export const Connexion = (props) => {
    const location = document.location.href
    return(
        <div id="Connexion" style={{ marginLeft: 'auto' }}>
            <Link to="/connexion">
                {location.includes('connexion') ? (
                    <ButtonSecondary className="mx-0 cursor-not-allowed" disabled={true}> Connexion </ButtonSecondary>
                ) : (
                     <ButtonPrimary className="mx-0"> Connexion </ButtonPrimary>
                )}
             </Link>
        </div>
    );
};