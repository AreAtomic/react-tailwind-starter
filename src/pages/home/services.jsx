import { HeadingOne } from '../../components/atoms'
import { useEffect, useState } from 'react'
import { Navbar, Footer } from '../../components/organisms/index'

const Services = (props) => {
    // Animations
    const [styles, setStyles] = useState({
        rocket: {
            position: 'absolute',
            zIndex: '4',
            left: '0%',
            top: '60%',
            width: '10vw',
        },
        planetPurple: {
            position: 'absolute',
            zIndex: '3',
            left: '30%',
            top: '-2%',
            width: '1vw',
        },
        planetGold: {
            position: 'absolute',
            zIndex: '2',
            top: '-10%',
            left: '90%',
            width: '0.2vw',
        },
        planetSilver: {
            position: 'absolute',
            zIndex: '2',
            top: '15%',
            left: '80%',
            width: '5vw',
        },
    })
    useEffect(() => {
        setTimeout(() => {
            setStyles({
                rocket: {
                    position: 'absolute',
                    zIndex: '4',
                    left: '10%',
                    top: '5%',
                    width: '30vw',
                },
                planetPurple: {
                    position: 'absolute',
                    zIndex: '3',
                    top: '0',
                    left: '0',
                    width: '15vw',
                },
                planetGold: {
                    position: 'absolute',
                    zIndex: '2',
                    top: '0',
                    left: '70%',
                    width: '5vw',
                },
                planetSilver: {
                    position: 'absolute',
                    zIndex: '1',
                    top: '50%',
                    left: '60%',
                    width: '17vw',
                },
            })
        }, 100)
    }, [])

    return (
        <>
            <div className="bg-gradient-to-b from-blue-areatomic-50 to-white-areatomic-500 px-5">
                <Navbar />
                <section id="sur-mesure">
                    <div className="grid grid-cols-2 py-10 px-10">
                        {/* Left side */}
                        <div className="">
                            <HeadingOne>
                                Faites <b>décoller</b> votre business avec un
                                site <b>sur mesure</b>
                            </HeadingOne>
                            <p className="py-3 mt-4 text-purple-areatomic-500">
                                La présence sur le web est un <b>atout</b>{' '}
                                majeur pour vous et votre business.
                                <br />
                                C'est pour cela qu'Areatomic vous propose un{' '}
                                <b>accompagnement complet</b>
                                <br />
                                pour réaliser un site web <b>
                                    à votre image
                                </b>{' '}
                                et faire décoller votre business.
                            </p>
                            <p className="py-2 text-purple-areatomic-500">
                                Pour cela, nous réalisons des réunions pour{' '}
                                <b>cibler</b> vos besoins réels, afin
                                <br />
                                d'orienter le développement de votre site dans
                                la <b>direction</b> que vous
                                <br />
                                souhaitez. Par la suite, nous vous proposons des
                                maquettes que nous
                                <br />
                                ajustons selon vos retours jusqu'à ce que cela
                                soit <b>parfait.</b>
                            </p>
                            <p className="py-3 text-purple-areatomic-500">
                                Pour finir, une fois que cela vous convient,
                                nous développons votre site et
                                <br />
                                nous vous le <b>livrons.</b> Lorsque le site est
                                en ligne, nous vous laissons la
                                <br />
                                main si vous le <b>souhaitez,</b> sinon, nous
                                réalisons l'administration du site
                                <br />
                                pour vous.
                            </p>
                        </div>
                        {/* Right side */}
                        {/*
          <div className='relative h-screen'>
            <div className='hidden'></div>
            <img
              src={rocket}
              id='rocket'
              alt='Votre business sur mesure qui décolle, by areatomic'
              className='duration-1000 ease-in'
              style={styles.rocket}
            />
            <img
              src={planetPurple}
              alt='Planète pour votre site sur mesure, by areatomic'
              className='duration-1000 ease-in'
              style={styles.planetPurple}
            />
            <img
              src={planetGold}
              alt='Planète pour des formations web sur mesure, by areatomic'
              className='duration-1000 ease-in'
              style={styles.planetGold}
            />
            <img
              src={planetSilver}
              alt='Planète pour des outils de développement sur mesure, by areatomic'
              className='duration-1000 ease-in'
              style={styles.planetSilver}
            />
        </div>*/}
                    </div>
                </section>
                <section id="accompagnement-formation">
                    <div className="grid grid-cols-2 py-20 px-10">
                        {/* Left side */}
                        <div></div>
                        {/*
        <div className='relative h-screen'>
          <div className='hidden'></div>
          <img
            src={rocket}
            id='rocket'
            alt='Votre business sur mesure qui décolle, by areatomic'
            className='duration-1000 ease-in'
            style={styles.rocket}
          />
          <img
            src={planetPurple}
            alt='Planète pour votre site sur mesure, by areatomic'
            className='duration-1000 ease-in'
            style={styles.planetPurple}
          />
          <img
            src={planetGold}
            alt='Planète pour des formations web sur mesure, by areatomic'
            className='duration-1000 ease-in'
            style={styles.planetGold}
          />
          <img
            src={planetSilver}
            alt='Planète pour des outils de développement sur mesure, by areatomic'
            className='duration-1000 ease-in'
            style={styles.planetSilver}
          />
        </div>
        */}
                        {/* Right side */}
                        <div className="">
                            <HeadingOne>
                                Un <b>accompagnement</b> complet et une{' '}
                                <b>formation</b> continue
                            </HeadingOne>
                            <p className="py-3 mt-4 text-purple-areatomic-500">
                                Vous aimeriez <b>savoir</b> développer vos
                                propres sites web, vous remettre à
                                <br />
                                niveau sur des technologies récentes ou
                                apprendre de{' '}
                                <b>
                                    nouvelles
                                    <br />
                                    technologies
                                </b>{' '}
                                pour ajouter une plus value à votre business ?
                            </p>
                            <p className="py-2 text-purple-areatomic-500">
                                Nous vous donnons la possibilité d'accéder à des{' '}
                                <b>formations</b> en ligne
                                <br />
                                sur des technologie de développement web telle
                                que <b>JavaScript.</b> Ces
                                <br />
                                formations seront suivies de 5 heures{' '}
                                <b>d'accompagnement</b> personnalisé
                                <br />
                                par mois pour vous aider à avancer au mieux.
                            </p>
                            <p className="py-3 text-purple-areatomic-500">
                                Si vous disposez déjà d'une équipe technique,
                                nous mettons une équipe
                                <br />
                                spécialisée à votre service pour les{' '}
                                <b>accompagner</b> dans leurs
                                <br />
                                problématiques du moment et les orienter dans
                                leurs <b>choix stratégiques.</b>
                            </p>
                        </div>
                    </div>
                </section>
                <section id="outils">
                    <div className="grid grid-cols-2 py-20 px-10">
                        {/* Left side */}
                        <div className="">
                            <HeadingOne>
                                Des <b>outils</b> pour vous les{' '}
                                <b>développeurs</b>
                            </HeadingOne>
                            <p className="py-3 mt-4 text-purple-areatomic-500">
                                Si vous êtes vous aussi développeur, vous savez
                                à quel point nous
                                <br />
                                pouvons perdre du temps sur des{' '}
                                <b>taches simples mais répétitives,</b>
                                <br />
                                ce qui nous empêche de nous concentrer sur
                                celles qui comptent réellement.
                            </p>
                            <p className="py-2 text-purple-areatomic-500">
                                C'est pour cela qu'au sein d'Areatomic nous
                                réalisons des outils pour
                                <br />
                                vous permettre de{' '}
                                <b>développer plus rapidement</b> et oublier les
                                taches répétitives afin
                                <br />
                                de nous concentrer sur l'essentiel, nos clients.
                            </p>
                            <p className="py-3 text-purple-areatomic-500">
                                Vous pourrez donc trouver des cheatsheet, des
                                extensions VS Code,
                                <br />
                                des <b>templates,</b> etc. Et si vous ne trouvez
                                pas ce que vous souhaitez,
                                <br />
                                <b>contactez-nous !</b>
                            </p>
                        </div>
                        {/* Right side */}
                        {/* 
        <div className='relative h-screen'>
          <div className='hidden'></div>
          <img
            src={rocket}
            id='rocket'
            alt='Votre business sur mesure qui décolle, by areatomic'
            className='duration-1000 ease-in'
            style={styles.rocket}
          />
          <img
            src={planetPurple}
            alt='Planète pour votre site sur mesure, by areatomic'
            className='duration-1000 ease-in'
            style={styles.planetPurple}
          />
          <img
            src={planetGold}
            alt='Planète pour des formations web sur mesure, by areatomic'
            className='duration-1000 ease-in'
            style={styles.planetGold}
          />
          <img
            src={planetSilver}
            alt='Planète pour des outils de développement sur mesure, by areatomic'
            className='duration-1000 ease-in'
            style={styles.planetSilver}
          />
          
        </div>
*/}
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Services
