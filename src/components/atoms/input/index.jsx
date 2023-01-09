import { useEffect, useState } from 'react'

import { isEmail, isPasswordValid } from '../../../utils'

const Email = ({ label, value, onChange }) => {
    const [error, setError] = useState(true)

    useEffect(() => {
        setError(!isEmail(value))
    }, [value])

    return (
        <div className="grid">
            <label htmlFor={label} className="pl-1 mb-1 text-sm">
                {label}
            </label>
            <input
                onChange={onChange}
                value={value}
                id={label}
                type="email"
                className={`border-2 py-2 px-4 rounded-full ${
                    value !== ''
                        ? error
                            ? 'border-red-500'
                            : 'border-green-500'
                        : 'border-blue-areatomic-500'
                } active:border-blue-areatomic-200`}
            />
        </div>
    )
}

const Password = ({ label, value, onChange }) => {
    const [error, setError] = useState(true)

    useEffect(() => {
        setError(!isPasswordValid(value))
    }, [value])

    return (
        <div className="grid">
            <label htmlFor={label} className="pl-1 mb-1 text-sm">
                {label}
            </label>
            <input
                onChange={onChange}
                value={value}
                id={label}
                type="password"
                className={`border-2 py-2 px-4 rounded-full ${
                    value !== ''
                        ? error
                            ? 'border-red-500'
                            : 'border-green-500'
                        : 'border-blue-areatomic-500'
                } active:border-blue-areatomic-200`}
            />
        </div>
    )
}

const Text = ({ label, value, onChange }) => {
    const [error, setError] = useState(true)

    useEffect(() => {
        setError(false)
    }, [value])

    return (
        <div className='grid'>
            <label htmlFor={label} className="pl-1 mb-1 text-sm">
                {label}
            </label>
            <input
                onChange={onChange}
                value={value}
                id={label}
                type="text"
                className={`border-2 py-2 px-4 rounded-full ${
                    value !== ''
                        ? error
                            ? 'border-red-500'
                            : 'border-green-500'
                        : 'border-blue-areatomic-500'
                } active:border-blue-areatomic-200`}
            />
        </div>
    )
}

export { Email, Password, Text }
