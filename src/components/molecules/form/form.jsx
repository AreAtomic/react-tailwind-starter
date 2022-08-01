import React from "react";
import {ButtonSecondary } from '../../atoms/buttons';

export default class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        expediteur:"",
        sujet:"",
        demande:""
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
      return (
            <form id="formulaireContact">
                <div className="py-1">
                    <input name="expediteur" placeholder="vous@example.com" className="bg-purple-areatomic-500 text-white-areatomic-50 px-2 py-1" style={{height:"35px",border:"solid 2px #7edcdf", borderRadius:"10px", width:"100%"}} onChange={this.handleInputChange} value={this.state.expediteur} />
                </div>
                <div className="py-2">
                    <input name="sujet" placeholder="Sujet de votre demande" className="bg-purple-areatomic-500 text-white-areatomic-50 px-2 py-1" style={{height:"35px",border:"solid 2px #7edcdf", borderRadius:"10px", width:"100%"}} onChange={this.handleInputChange} value={this.state.sujet} />
                </div>
                <div className="py-1">
                    <textarea name="demande" placeholder="Détail de votre demande" className="bg-purple-areatomic-500 text-white-areatomic-50 px-2 py-1" style={{height:"150px",border:"solid 2px #7edcdf", borderRadius:"10px", width:"100%" }} onChange={this.handleInputChange} value={this.state.demande} />
                </div>
                <div className="py-2">
                    <div >
                    <ButtonSecondary ><a href={"mailto:aurelien@areatomic.com?cc="+this.state.expediteur+"&subject="+this.state.sujet+"&body="+this.state.demande}>Nous contacter</a></ButtonSecondary>
                    </div>
                </div>
            </form>
      );
    }
    
  }