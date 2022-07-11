import { HeadingOne, CardWithoutImage } from '../../components/atoms';
import rocket from '../../assets/rocket-3d.png';
import planetPurple from '../../assets/planet-purple.png';
import planetGold from '../../assets/planet-gold.png';
import planetSilver from '../../assets/planet-silver.png';
import { useEffect, useState } from 'react';
import { Navbar } from '../../components/molecules';

const Articles = (props) => {
  // Animations
  const [styles, setStyles] = useState({
    rocket: {
      position: 'absolute',
      zIndex: '4',
      left: '0%',
      top: '60%',
      width: '10vw'
    },
    planetPurple: {
      position: 'absolute',
      zIndex: '3',
      left: '30%',
      top: '-2%',
      width: '1vw'
    },
    planetGold: {
      position: 'absolute',
      zIndex: '2',
      top: '-10%',
      left: '90%',
      width: '0.2vw'
    },
    planetSilver: {
      position: 'absolute',
      zIndex: '2',
      top: '15%',
      left: '80%',
      width: '5vw'
    }
  });
  useEffect(() => {
    setTimeout(() => {
      setStyles({
        rocket: {
          position: 'absolute',
          zIndex: '4',
          left: '10%',
          top: '5%',
          width: '30vw'
        },
        planetPurple: {
          position: 'absolute',
          zIndex: '3',
          top: '0',
          left: '0',
          width: '15vw'
        },
        planetGold: {
          position: 'absolute',
          zIndex: '2',
          top: '0',
          left: '70%',
          width: '5vw'
        },
        planetSilver: {
          position: 'absolute',
          zIndex: '1',
          top: '50%',
          left: '60%',
          width: '17vw'
        }
      });
    }, 100);
  }, []);

  return (
    <>
      
    <div className='bg-gradient-to-b from-blue-areatomic-50 to-white-areatomic-500 px-5'>
    <Navbar/>
      <div className='grid grid-cols-2 py-10 px-10'>
        {/* Left side */}
        <div className='w-3/4'>
          <HeadingOne>
            Areatomic rend votre business <b>atomique</b>
          </HeadingOne>
          <div className='mb-4'></div>
          <CardWithoutImage
            heading='Site sur mesure'
            text='Création de site vitrine et de site e-commerce 100% personnalisé pour vous permttre de faiore décoller votre business.'
          />
          <div className='mb-2'></div>
          <CardWithoutImage
            heading='Formation & Apprentissage'
            text='Accompagnement des équipes techniques de votre entreprise pour fixer des axes de travail stratégiques pour faire évoluer vos produits.'
          />
          <div className='mb-2'></div>
          <CardWithoutImage
            heading='Outils'
            text="Mise à disposition d'outils pour les développeurs: templates, cheatsheet."
          />
        </div>
        {/* Right side */}
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
      </div>
    </div>
    </>
    
  );
};

export default Articles;
