import { Link } from 'react-router-dom'
import { HeadingFive } from '../headings'

export const NavbarLink = (props) => {
    const location = window.location.pathname

    return (
        <div id={props.id} className="px-5">
            <Link to={props.href} class="titre">
                <HeadingFive color="text-purple-areatomic-500">
                    <b>{props.titre}</b>
                </HeadingFive>
            </Link>
            {(location.includes(props.href) ||
                (props.href === '/accueil' && location === '/')) && (
                <div
                    id="greenLine"
                    style={{
                        border: 'solid #7edcdf 2px',
                        borderRadius: '2px',
                    }}
                ></div>
            )}
        </div>
    )
}
