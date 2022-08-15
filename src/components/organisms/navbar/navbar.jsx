import { NavbarLink, LienLogo, Connexion } from '../../atoms'

export const Navbar = (props) => {
    return (
        <header>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
            >
                <LienLogo />
                <NavbarLink id="Accueil" href="/accueil" titre="Accueil" />
                <NavbarLink id="Services" href="/services" titre="Services" />
                <NavbarLink id="Produits" href="/produits" titre="Produits" />
                <NavbarLink id="Articles" href="/articles" titre="Articles" />
                <Connexion />
            </div>
        </header>
    )
}
