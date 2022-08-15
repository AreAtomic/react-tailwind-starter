import { Link } from 'react-router-dom'
import {
    HeadingTwo,
    HeadingThree,
    HeadingFour,
    HeadingFive,
    HeadingSix,
} from '../headings'
import { ButtonPrimary, ButtonSecondary } from '../buttons'

export const NavbarLink = (props) => {
    const location = document.location.href
    return (
        <div id={props.id} className="px-5">
            <Link to={props.href} class="titre">
                <HeadingFive color="text-purple-areatomic-500">
                    <b>{props.titre}</b>
                </HeadingFive>
            </Link>
            {location.includes(props.href) && (
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
