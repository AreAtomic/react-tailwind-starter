import { useEffect, useState } from 'react'
import { Links, LienLogo, Button } from './components'

export const Navbar = (props) => {
    const [active, setActive] = useState(false)
    const [closed, setClosed] = useState(true)
    const [background, setBackground] = useState(false)

    useEffect(() => {
        if (!active) {
            setTimeout(() => {
                setClosed(!active)
            }, 400)
        } else {
            setClosed(!active)
        }
    }, [active])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                setBackground(true)
            }else {
                setBackground(false)
            }
        })

        return () => {
            window.removeEventListener('scroll', () => {})
        }
    }, [])

    return (
        <header>
            <div
                className={`flex items-center bg-blue-areatomic-200 px-4 transition-colors ${
                    background
                        ? 'lg:bg-blue-areatomic-200'
                        : 'lg:bg-transparent'
                } fixed w-full z-40`}
            >
                <LienLogo />
                <div className="hidden lg:flex mx-2">
                    <Links />
                </div>
                <div className="hidden lg:flex ml-auto">
                    <Button />
                </div>
                <div
                    className="flex lg:hidden ml-auto"
                    onClick={() => setActive(!active)}
                >
                    {!active ? (
                        <i className="material-icons left mr-1 text-4xl">
                            menu
                        </i>
                    ) : (
                        <i className="material-icons left mr-1 text-4xl">
                            close
                        </i>
                    )}
                </div>
                <div
                    className={`absolute grid lg:hidden w-full left-0 top-12 bg-blue-areatomic-200 ${
                        active ? 'animate-fade-in-down' : 'animate-fade-out-up'
                    } ${closed && 'hidden'} py-1`}
                >
                    <Links />
                    <div className='mx-4'>

                    <Button />
                    </div>
                </div>
            </div>
        </header>
    )
}
