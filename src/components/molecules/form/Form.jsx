import React, { useState } from 'react'
import { ButtonSecondary } from '../../atoms/buttons'

const Form = () => {
    const [expediteur, setExpediteur] = useState('')
    const [sujet, setSujet] = useState('')
    const [demande, setDemande] = useState('')

    return (
        <form id="formulaireContact" onSubmit={(e) => e.preventDefault()}>
            <div className="py-1">
                <input
                    name="expediteur"
                    placeholder="vous@example.com"
                    className="bg-purple-areatomic-500 text-white-areatomic-50 px-2 py-1"
                    style={{
                        height: '35px',
                        border: 'solid 2px #7edcdf',
                        borderRadius: '10px',
                        width: '100%',
                    }}
                    onChange={(e) => setExpediteur(e.target.value)}
                    value={expediteur}
                />
            </div>
            <div className="py-2">
                <input
                    name="sujet"
                    placeholder="Sujet de votre demande"
                    className="bg-purple-areatomic-500 text-white-areatomic-50 px-2 py-1"
                    style={{
                        height: '35px',
                        border: 'solid 2px #7edcdf',
                        borderRadius: '10px',
                        width: '100%',
                    }}
                    onChange={(e) => setSujet(e.target.value)}
                    value={sujet}
                />
            </div>
            <div className="py-1">
                <textarea
                    name="demande"
                    placeholder="Détail de votre demande"
                    className="bg-purple-areatomic-500 text-white-areatomic-50 px-2 py-1"
                    style={{
                        height: '150px',
                        border: 'solid 2px #7edcdf',
                        borderRadius: '10px',
                        width: '100%',
                    }}
                    onChange={(e) => setDemande(e.target.value)}
                    value={demande}
                />
            </div>
            <div className="py-2">
                <div>
                    <ButtonSecondary>
                        <a
                            href={
                                'mailto:contact@areatomic.com?cc=' +
                                expediteur +
                                '&subject=' +
                                sujet +
                                '&body=' +
                                demande
                            }
                        >
                            Nous contacter
                        </a>
                    </ButtonSecondary>
                </div>
            </div>
        </form>
    )
}

export default Form
