import { Link } from 'react-router-dom'
import { ButtonPrimary } from '../../../atoms'
import { useAuth } from '../../../../contexts'

const Deconnexion = () => {
    const authContext = useAuth()

    return (
        <div id="logout" onClick={authContext.loggedOut}>
            <ButtonPrimary className="mx-0">Déconnexion</ButtonPrimary>
        </div>
    )
}

const Connexion = (props) => {
    const location = document.location.href
    return (
        <div id="Login">
            <Link to="/login">
                <ButtonPrimary
                    className={`mx-0 ${
                        (location.includes('login') ||
                            location.includes('register')) &&
                        'cursor-not-allowed'
                    }`}
                >
                    Connexion
                </ButtonPrimary>
            </Link>
        </div>
    )
}

export const Button = () => {
    const authContext = useAuth()

    console.log(authContext.isLogged)

    return authContext.isLogged === true ? (
        <Deconnexion logout={() => authContext.loggedOut} />
    ) : (
        <Connexion />
    )
}
