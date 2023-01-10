import { NavbarLink } from './NavbarLink'

export const Links = () => {
    return (
        <>
            <NavbarLink id="Accueil" href="/accueil" titre="Accueil" />
            <NavbarLink id="Services" href="/services" titre="Services" />
            {/* <NavbarLink id="Produits" href="/produits" titre="Produits" />
            <NavbarLink id="Articles" href="/articles" titre="Articles" /> */}
        </>
    )
}
