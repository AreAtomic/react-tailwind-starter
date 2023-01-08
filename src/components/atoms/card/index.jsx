import { ButtonPrimary, ButtonSecondary } from '../buttons'
import { HeadingTwo } from '../headings'
import arrow from '../../../assets/arrow-right.svg'

// TODO: icon "->" sur bouton "Voir plus"

export const CardWithoutImage = (props) => {
    return (
        <div className="md:w-card-sm max-h-card-sm bg-component-500 rounded px-4 py-4 w-96">
            <HeadingTwo color="text-blue-areatomic-500">
                {props.heading}
            </HeadingTwo>
            <div className="mb-3"></div>
            <p className="text-white-areatomic-500 text-[17px]">{props.text}</p>
            <ButtonSecondary className="flex mx-0 mt-4 items-center justify-center">
                Voir plus{' '}
                <img
                    src={arrow}
                    alt="Flèche voir plus, Areatomic sit web sur mesure"
                    className="ml-2"
                />
            </ButtonSecondary>
        </div>
    )
}

export const CardProduct = (props) => {
    return (
        <div className="w-card-product bg-component-500 rounded px-4 py-7">
            <HeadingTwo color="text-blue-areatomic-500">
                {props.heading}
            </HeadingTwo>
            <div className="mb-2"></div>
            <img src={props.image} alt={props.alt} className="rounded-md" />
            <div className="mb-2"></div>
            <HeadingTwo color="text-blue-areatomic-500">
                {props.price}€
            </HeadingTwo>
            <div className="mb-2"></div>
            <p className="text-white-areatomic-500 text-[17px]">{props.text}</p>
            <div className="mb-10"></div>
            <div className="grid grid-cols-2 justify-items-start">
                <ButtonPrimary className="mx-0 mt-4 items-center justify-center">
                    Acheter
                </ButtonPrimary>
                <ButtonSecondary className="flex mx-0 mt-4 items-center justify-center">
                    Voir plus{' '}
                    <img
                        src={arrow}
                        alt="Flèche voir plus, Areatomic sit web sur mesure"
                        className="ml-2"
                    />
                </ButtonSecondary>
            </div>
        </div>
    )
}

export const CardArticle = (props) => {
    return (
        <div className="w-card-article bg-component-500 rounded px-4 py-7">
            <HeadingTwo color="text-blue-areatomic-500">
                {props.heading}
            </HeadingTwo>
            <div className="mb-2"></div>
            <img src={props.image} alt={props.alt} className="rounded-md" />
            <div className="mb-2"></div>
            <HeadingTwo color="text-blue-areatomic-500">
                {props.title}
            </HeadingTwo>
            <div className="mb-2"></div>
            <p className="text-white-areatomic-500 text-[17px]">{props.text}</p>
            <div className="mb-10"></div>
            <div className="grid grid-cols-2 justify-items-start">
                <ButtonPrimary className="mx-0 mt-4 items-center justify-center">
                    Lire
                </ButtonPrimary>
                <ButtonSecondary className="flex mx-0 mt-4 items-center justify-center">
                    Voir plus{' '}
                    <img
                        src={arrow}
                        alt="Flèche voir plus, Areatomic sit web sur mesure"
                        className="ml-2"
                    />
                </ButtonSecondary>
            </div>
        </div>
    )
}
