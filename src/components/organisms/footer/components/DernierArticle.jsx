import { HeadingTwo, ButtonSecondary } from '../../../atoms'
import { Link } from 'react-router-dom'

export const DernierArticle = (props) => {
    return (
        <div id="dernierArticle">
            <div className="py-2">
                <HeadingTwo color="text-blue-areatomic-500">
                    Dernier article
                </HeadingTwo>
            </div>
            <div className="py-1">
                <Link to="">
                    <img
                        alt="Dernier Article"
                        src=""
                        style={{
                            width: '300px',
                            height: '160px',
                            border: 'solid 1px #313961',
                            borderRadius: '10px',
                        }}
                    />
                </Link>
                <div className="py-5">
                    <Link to="">
                        <ButtonSecondary>Lire</ButtonSecondary>
                    </Link>
                </div>
            </div>
        </div>
    )
}
