import { HeadingTwo} from '../../atoms/headings';
import Form from "../../molecules/form/form"
import { Contact } from '../../molecules/contact/contact';
import { Donnees } from '../../molecules/donnees/donnees';
import { Site } from '../../molecules/site/site';
import { DernierArticle } from '../../molecules/dernierArticle/dernierArticle';
import { Reseaux } from '../../molecules/reseaux/reseaux';

export const Footer = (props) => {
    return (
        <footer>
          <div style={{display:"flex"}} className='bg-component-500 px-10 py-5'>
            <div id="ContactDonnes">
                <Contact/>
                <Donnees/>
            </div>
            <Site/>
            <Reseaux/>
            <div id="ContactForm" className='px-10' style={{width:"25%"}}>
                <div className='py-2'>
                    <HeadingTwo color='text-blue-areatomic-500' >Nous contacter</HeadingTwo>
                </div>                 
                <Form/>
            </div>
            <DernierArticle/>
          </div>
        </footer>
      );
  };