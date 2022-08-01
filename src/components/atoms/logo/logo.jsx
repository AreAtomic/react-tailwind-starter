import logo from "../../../assets/logo.png"
import {Link} from "react-router-dom"

export const LienLogo = (props) => {
    return(
        <div id="logo">
            <Link to="/accueil">
                <img src={logo} />
            </Link>
        </div>
    );
};

    