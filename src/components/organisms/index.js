import {Link} from "react-router-dom"
import { HeadingTwo} from '../atoms/headings';
import { ButtonSecondary } from '../atoms/buttons';
import Form from "./form"

export const Footer = (props) => {
    var mail ;
    return (
        <footer>
          <div style={{display:"flex"}} className='bg-component-500 px-10 py-5'>
            <div id="ContactDonnes">
                <div id="contact">
                    <div className='py-2'>
                    <HeadingTwo color='text-blue-areatomic-500' >Contact</HeadingTwo>
                    </div> 
                    <a className='py-5' href='mailto:aurelien@areatomic.com' style={{color:"white", textDecoration:"underline"}}>contact@areatomic.com</a>
                    <p style={{color:"white"}}>06 08 36 57 30</p>
                    <p style={{color:"white"}}>8 Rue des maçons</p>
                    <p style={{color:"white"}}>81100 - Castres</p>
                </div>
                <div id="donnees" className='py-10'>
                    <div className='py-2'>
                        <HeadingTwo color='text-blue-areatomic-500' >Données</HeadingTwo>
                    </div> 
                    <a href='' style={{color:"white"}}>Conditions générales de vente</a>
                    <br/><a href='' style={{color:"white"}}>Newsletter</a>
                    <br/><a href='' style={{color:"white"}}>Gestion des données</a>
                    <br/><a href='' style={{color:"white"}}>Entreprise</a>
                </div>
            </div>
            <div id="Site" className='px-10'>
                <div className='py-2'>
                    <HeadingTwo color='text-blue-areatomic-500' >Site</HeadingTwo>
                </div>                 
                <Link to="/services" style={{color:"white"}}>Tous nos services</Link>
                <br/><Link to="/produits" style={{color:"white"}}>Tous nos produits</Link>
                <br/><Link to="/articles" style={{color:"white"}}>Toute l'actualité</Link>
                <br/><Link to="/connexion" style={{color:"white"}}>Votre compte</Link>
            </div>
            <div id="Reseaux" className='px-10'>
                <div className='py-2'>
                    <HeadingTwo color='text-blue-areatomic-500' >Nos réseaux</HeadingTwo>
                </div>                 
                <a href="https://www.instagram.com/areatomic/" style={{color:"white"}}>Instagram</a>
                <br/><a href="https://tealfeed.com/areatomic" style={{color:"white"}}>Tealfeed</a>
                <br/><a href="https://www.linkedin.com/company/areatomic/about/" style={{color:"white"}}>Linkedin</a>
            </div>
            <div id="ContactForm" className='px-10' style={{width:"25%"}}>
                <div className='py-2'>
                    <HeadingTwo color='text-blue-areatomic-500' >Nous contacter</HeadingTwo>
                </div>                 
                <Form/>
            </div>
            <div id="dernierArticle">
                <div className='py-2'>
                    <HeadingTwo color='text-blue-areatomic-500' >Dernier article</HeadingTwo>
                </div>
                <div className="py-1">
                        <Link to="">
                            <img alt="Dernier Article" src="" style={{width:"300px",height:"160px", border:"solid 1px #313961", borderRadius:"10px"}}/>
                        </Link>
                    <div className="py-5">
                    <Link to="">
                        <ButtonSecondary >Lire</ButtonSecondary>                    
                    </Link>
                    </div>
                </div>
            </div>
          </div>
        </footer>
        
      );
    
  };