// TODO: Navbar
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom'
import {
    HeadingTwo,
    HeadingThree,
    HeadingFour,
    HeadingFive,
    HeadingSix,
} from '../../atoms/headings'
import { ButtonPrimary, ButtonSecondary } from '../../atoms/buttons'

export const Navbar = (props) => {
    const location = document.location.href
    return (
        <header>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
            >
                <div id="logo">
                    <Link to="/accueil">
                        <img src={logo} />
                    </Link>
                </div>
                <div id="Accueil" className="px-5">
                    <Link to="/accueil" class="titre">
                        <HeadingFive color="text-purple-areatomic-500">
                            <b>Accueil</b>
                        </HeadingFive>
                    </Link>
                    {location.includes('accueil') && (
                        <div
                            id="greenLine"
                            style={{
                                border: 'solid #7edcdf 2px',
                                borderRadius: '2px',
                            }}
                        ></div>
                    )}
                </div>
                <div id="Services" className="px-5">
                    <Link to="/services" class="titre">
                        <HeadingFive color="text-purple-areatomic-500">
                            <b>Services</b>
                        </HeadingFive>
                    </Link>
                    {location.includes('services') && (
                        <div
                            id="greenLine"
                            style={{
                                border: 'solid #7edcdf 2px',
                                borderRadius: '2px',
                            }}
                        ></div>
                    )}
                </div>
                <div id="Produits" className="px-5">
                    <Link to="/produits" class="titre">
                        <HeadingFive color="text-purple-areatomic-500">
                            <b>Produits</b>
                        </HeadingFive>
                    </Link>
                    {location.includes('produits') && (
                        <div
                            id="greenLine"
                            style={{
                                border: 'solid #7edcdf 2px',
                                borderRadius: '2px',
                            }}
                        ></div>
                    )}
                </div>
                <div id="Articles" className="px-5">
                    <Link to="/articles" class="titre">
                        <HeadingFive color="text-purple-areatomic-500">
                            <b>Articles</b>
                        </HeadingFive>
                    </Link>
                    {location.includes('articles') && (
                        <div
                            id="greenLine"
                            style={{
                                border: 'solid #7edcdf 2px',
                                borderRadius: '2px',
                            }}
                        ></div>
                    )}
                </div>
                <div id="Connexion" style={{ marginLeft: 'auto' }}>
                    <Link to="/connexion">
                        {location.includes('connexion') ? (
                            <ButtonSecondary
                                className="mx-0 cursor-not-allowed"
                                disabled={true}
                            >
                                Connexion
                            </ButtonSecondary>
                        ) : (
                            <ButtonPrimary className="mx-0">
                                Connexion
                            </ButtonPrimary>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    )
}
