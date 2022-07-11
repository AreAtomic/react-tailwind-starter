// TODO: Navbar
import logo from "../../assets/logo.png"
import {Link} from "react-router-dom"
import { HeadingTwo,HeadingThree,HeadingFour,HeadingFive,HeadingSix } from '../atoms/headings';
import { ButtonPrimary } from '../atoms/buttons';



export const Navbar = (props) => {
    console.log(document.location.href)
    if(document.location.href.includes("services")){
        return (
            <header>
              <div style={{display:"flex", alignItems:"center",textAlign:"center"}}>
                  <div id="logo">
                      <Link to="/accueil"><img src ={logo}/></Link>
                  </div>
                  <div id="Accueil" className='px-5'>
                      <Link to="/accueil" class="titre"><HeadingFive color='text-purple-areatomic-500'><b>Accueil</b></HeadingFive></Link>
                      <div class="noLine" style={{border: "solid rgba(0,0,0,0) 2px",borderRadius: "2px"}}></div>
                  </div>
                  <div id="Services" className='px-5'>
                      <Link to="/services" class="titre"><HeadingFive color='text-purple-areatomic-500'><b>Services</b></HeadingFive></Link>
                      <div id="greenLine" style={{border: "solid #7edcdf 2px",borderRadius: "2px"}}></div>
                  </div>
                  <div id="Produits" className='px-5'>
                      <Link to="/produits" class="titre"><HeadingFive color='text-purple-areatomic-500'><b>Produits</b></HeadingFive></Link>
                      <div class="noLine" style={{border: "solid rgba(0,0,0,0) 2px",borderRadius: "2px"}}></div>
                  </div>
                  <div id="Articles" className='px-5'>
                      <Link to="/articles" class="titre"><HeadingFive color='text-purple-areatomic-500'><b>Articles</b></HeadingFive></Link>
                      <div class="noLine" style={{border: "solid rgba(0,0,0,0) 2px",borderRadius: "2px"}}></div>
                  </div>
                  <div id="Connexion" style={{marginLeft:"auto"}}>
                      <Link to="/connexion" > <ButtonPrimary className='mx-0' >Connexion</ButtonPrimary></Link>
                  </div>
              </div>
            </header>
          );
    }
    else if(document.location.href.includes("produits")){
        return (
            <header>
              <div style={{display:"flex", alignItems:"center",textAlign:"center"}}>
                  <div id="logo">
                      <Link to="/accueil"><img src ={logo}/></Link>
                  </div>
                  <div id="Accueil" className='px-5'>
                      <Link to="/accueil" class="titre"><HeadingFive color='text-purple-areatomic-500'><b>Accueil</b></HeadingFive></Link>
                      <div class="noLine" style={{border: "solid rgba(0,0,0,0) 2px",borderRadius: "2px"}}></div>
                  </div>
                  <div id="Services" className='px-5'>
                      <Link to="/services" class="titre"><HeadingFive color='text-purple-areatomic-500'><b>Services</b></HeadingFive></Link>
                      <div class="noLine" style={{border: "solid rgba(0,0,0,0) 2px",borderRadius: "2px"}}></div>
                  </div>
                  <div id="Produits" className='px-5'>
                      <Link to="/produits" class="titre"><HeadingFive color='text-purple-areatomic-500'><b>Produits</b></HeadingFive></Link>
                      <div id="greenLine" style={{border: "solid #7edcdf 2px",borderRadius: "2px"}}></div>
                  </div>
                  <div id="Articles" className='px-5'>
                      <Link to="/articles" class="titre"><HeadingFive color='text-purple-areatomic-500'><b>Articles</b></HeadingFive></Link>
                      <div class="noLine" style={{border: "solid rgba(0,0,0,0) 2px",borderRadius: "2px"}}></div>
                  </div>
                  <div id="Connexion" style={{marginLeft:"auto"}}>
                      <Link to="/connexion" > <ButtonPrimary className='mx-0' >Connexion</ButtonPrimary></Link>
                  </div>
              </div>
            </header>
          );
    }
    else if(document.location.href.includes("articles")){
        return (
            <header>
              <div style={{display:"flex", alignItems:"center",textAlign:"center"}}>
                  <div id="logo">
                      <Link to="/accueil"><img src ={logo}/></Link>
                  </div>
                  <div id="Accueil" className='px-5'>
                      <Link to="/accueil" class="titre"><HeadingFive color='text-purple-areatomic-500'><b>Accueil</b></HeadingFive></Link>
                      <div class="noLine" style={{border: "solid rgba(0,0,0,0) 2px",borderRadius: "2px"}}></div>
                  </div>
                  <div id="Services" className='px-5'>
                      <Link to="/services" class="titre"><HeadingFive color='text-purple-areatomic-500'><b>Services</b></HeadingFive></Link>
                      <div class="noLine" style={{border: "solid rgba(0,0,0,0) 2px",borderRadius: "2px"}}></div>
                  </div>
                  <div id="Produits" className='px-5'>
                      <Link to="/produits" class="titre"><HeadingFive color='text-purple-areatomic-500'><b>Produits</b></HeadingFive></Link>
                      <div class="noLine" style={{border: "solid rgba(0,0,0,0) 2px",borderRadius: "2px"}}></div>
                  </div>
                  <div id="Articles" className='px-5'>
                      <Link to="/articles" class="titre"><HeadingFive color='text-purple-areatomic-500'><b>Articles</b></HeadingFive></Link>
                      <div id="greenLine" style={{border: "solid #7edcdf 2px",borderRadius: "2px"}}></div>
                  </div>
                  <div id="Connexion" style={{marginLeft:"auto"}}>
                      <Link to="/connexion" > <ButtonPrimary className='mx-0' >Connexion</ButtonPrimary></Link>
                  </div>
              </div>
            </header>
          );
    }
    else if(document.location.href.includes("connexion")){
        return (
            <header>
              <div style={{display:"flex", alignItems:"center",textAlign:"center"}}>
                  <div id="logo">
                      <Link to="/accueil"><img src ={logo}/></Link>
                  </div>
                  <div id="Accueil" className='px-5'>
                      <Link to="/accueil" class="titre"><HeadingFive color='text-purple-areatomic-500'><b>Accueil</b></HeadingFive></Link>
                      <div class="noLine" style={{border: "solid rgba(0,0,0,0) 2px",borderRadius: "2px"}}></div>
                  </div>
                  <div id="Services" className='px-5'>
                      <Link to="/services" class="titre"><HeadingFive color='text-purple-areatomic-500'><b>Services</b></HeadingFive></Link>
                      <div class="noLine" style={{border: "solid rgba(0,0,0,0) 2px",borderRadius: "2px"}}></div>
                  </div>
                  <div id="Produits" className='px-5'>
                      <Link to="/produits" class="titre"><HeadingFive color='text-purple-areatomic-500'><b>Produits</b></HeadingFive></Link>
                      <div class="noLine" style={{border: "solid rgba(0,0,0,0) 2px",borderRadius: "2px"}}></div>
                  </div>
                  <div id="Articles" className='px-5'>
                      <Link to="/articles" class="titre"><HeadingFive color='text-purple-areatomic-500'><b>Articles</b></HeadingFive></Link>
                      <div class="noLine" style={{border: "solid rgba(0,0,0,0) 2px",borderRadius: "2px"}}></div>
                  </div>
                  <div id="Connexion" style={{marginLeft:"auto"}}>
                      <Link to="/connexion" > <ButtonPrimary className='mx-0' >Connexion</ButtonPrimary></Link>
                  </div>
              </div>
            </header>
          );
    }
    else{
        return (
            <header>
              <div style={{display:"flex", alignItems:"center",textAlign:"center"}}>
                  <div id="logo">
                      <Link to="/accueil"><img src ={logo}/></Link>
                  </div>
                  <div id="Accueil" className='px-5'>
                      <Link to="/accueil" class="titre"><HeadingFive color='text-purple-areatomic-500'><b>Accueil</b></HeadingFive></Link>
                      <div id="greenLine" style={{border: "solid #7edcdf 2px",borderRadius: "2px"}}></div>
                  </div>
                  <div id="Services" className='px-5'>
                      <Link to="/services" class="titre"><HeadingFive color='text-purple-areatomic-500'><b>Services</b></HeadingFive></Link>
                      <div class="noLine" style={{border: "solid rgba(0,0,0,0) 2px",borderRadius: "2px"}}></div>
                  </div>
                  <div id="Produits" className='px-5'>
                      <Link to="/produits" class="titre"><HeadingFive color='text-purple-areatomic-500'><b>Produits</b></HeadingFive></Link>
                      <div class="noLine" style={{border: "solid rgba(0,0,0,0) 2px",borderRadius: "2px"}}></div>
                  </div>
                  <div id="Articles" className='px-5'>
                      <Link to="/articles" class="titre"><HeadingFive color='text-purple-areatomic-500'><b>Articles</b></HeadingFive></Link>
                      <div class="noLine" style={{border: "solid rgba(0,0,0,0) 2px",borderRadius: "2px"}}></div>
                  </div>
                  <div id="Connexion" style={{marginLeft:"auto"}}>
                      <Link to="/connexion" > <ButtonPrimary className='mx-0' >Connexion</ButtonPrimary></Link>
                  </div>
              </div>
            </header>
          );
    }
    
  };