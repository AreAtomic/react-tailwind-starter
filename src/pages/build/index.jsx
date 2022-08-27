import {
    ButtonPrimary,
    ButtonSecondary,
    CardArticle,
    CardProduct,
    CardWithoutImage,
    HeadingOne,
} from '../../components/atoms'
import image from '../../assets/image-product.png'

const Build = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-areatomic-50 to-white-areatomic-500">
            <HeadingOne>
                Areatomic rend votre business <b>atomique</b>
            </HeadingOne>
            <ButtonPrimary>Connexion</ButtonPrimary>
            <ButtonSecondary>Lire</ButtonSecondary>
            <CardWithoutImage
                heading="Site sur mesure"
                text="Création de site vitrine et de site e-commerce 100% personnalisé pour vous permttre de faiore décoller votre business."
            />
            <div className="mb-2"></div>
            <CardArticle
                heading="Template React & Tailwind"
                price={10.0}
                text="Un template React.js & Tailwind CSS contenant tous les composants de bases."
                image={image}
                alt="Template React & Tailwind by Areatomic"
            />
        </div>
    )
}

export default Build
