export const HeadingOne = (props) => {
    return (
        <h1
            className={`text-3xl md:text-5xl ${props.color || 'text-purple-areatomic-500'}`}
        >
            {props.children}
        </h1>
    )
}

export const HeadingTwo = (props) => {
    return (
        <h2
            className={`text-2xl md:text-3xl ${props.color || 'text-purple-areatomic-500'}`}
        >
            {props.children}
        </h2>
    )
}

export const HeadingThree = (props) => {
    return (
        <h3
            className={`text-xl md:text-2xl ${props.color || 'text-purple-areatomic-500'}`}
        >
            {props.children}
        </h3>
    )
}

export const HeadingFour = (props) => {
    return (
        <h4 className={`text-lg md:text-xl ${props.color || 'text-purple-areatomic-500'}`}>
            {props.children}
        </h4>
    )
}

export const HeadingFive = (props) => {
    return (
        <h5 className={`text-lg ${props.color || 'text-purple-areatomic-500'}`}>
            {props.children}
        </h5>
    )
}

export const HeadingSix = (props) => {
    return (
        <h6
            className={`text-base ${
                props.color || 'text-purple-areatomic-500'
            }`}
        >
            {props.children}
        </h6>
    )
}
