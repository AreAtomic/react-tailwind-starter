const Loading = () => {
    return (
        <svg
            class="animate-spin ml-4 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
            ></circle>
            <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
        </svg>
    )
}

export const ButtonPrimary = (props) => {
    return (
        <button
            className={`bg-purple-areatomic-500 text-blue-areatomic-500 min-w-button drop-shadow-sm ${
                props.className
            } ${
                (props.loading || props.disabled) &&
                'bg-purple-areatomic-300 opacity-75 cursor-not-allowed inline-flex items-center'
            }`}
            onClick={props.onClick}
            style={{ height: '35px', borderRadius: '20px' }}
            type={props.type}
            disabled={props.disabled || props.loading}
        >
            {props.loading && <Loading />}
            {props.children}
        </button>
    )
}

export const ButtonSecondary = (props) => {
    return (
        <button
            className={`bg-blue-areatomic-500 text-purple-areatomic-500 min-w-button  drop-shadow-sm ${
                props.className
            } ${
                (props.loading || props.disabled) &&
                'bg-blue-areatomic-300 opacity-75 cursor-not-allowed inline-flex items-center'
            }`}
            onClick={props.onClick}
            style={{ height: '35px', borderRadius: '20px' }}
            type={props.type}
        >
            {props.children}
        </button>
    )
}
