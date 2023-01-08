import { HeadingTwo } from '../../atoms/headings'

export const Contact = (props) => {
    return (
        <div id="contact">
            <div className="py-2">
                <HeadingTwo color="text-blue-areatomic-500">Contact</HeadingTwo>
            </div>
            <a
                className="py-5"
                href="mailto:aurelien@areatomic.com"
                style={{ color: 'white', textDecoration: 'underline' }}
            >
                aurelien@areatomic.com
            </a>
            <p style={{ color: 'white' }}>06 08 36 57 30</p>
            <p style={{ color: 'white' }}>8 Rue des maçons</p>
            <p style={{ color: 'white' }}>81100 - Castres</p>
        </div>
    )
}
