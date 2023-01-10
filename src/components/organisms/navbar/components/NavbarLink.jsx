import { Link } from 'react-router-dom'
import { HeadingFive } from '../../../atoms'

export const NavbarLink = (props) => {
    const location = window.location.pathname

    return (
        <div
            id={props.id}
            className={`px-5 py-3 ${
                (location.includes(props.href) ||
                    (props.href === '/accueil' && location === '/')) &&
                'bg-purple-areatomic-200 lg:bg-transparent'
            }`}
        >
            <Link to={props.href}>
                <HeadingFive
                    color={`${
                        location.includes(props.href) ||
                        (props.href === '/accueil' && location === '/')
                            ? 'text-blue-areatomic-200 lg:text-purple-areatomic-200'
                            : 'text-purple-areatomic-500'
                    }`}
                >
                    <b>{props.titre}</b>
                </HeadingFive>
            </Link>
            {(location.includes(props.href) ||
                (props.href === '/accueil' && location === '/')) && (
                <div
                    id="greenLine"
                    className="hidden lg:flex bg-purple-areatomic-300 rounded-sm h-1"
                ></div>
            )}
        </div>
    )
}
