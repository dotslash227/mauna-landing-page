// Menu.js for top navigation for mauna landing page
// Dependencies: React. Styles -> menu.css
import React from 'react';
import "../styles/menu.css";
import {Link} from "react-router-dom";

class Menu extends React.Component{
    
    render(){
        return(            
                <div className="landing-menu">
                    <nav className="navbar navbar-expand-lg">                
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse mauna-menu" id="navbarNavAltMarkup">
                            <div className="navbar-nav">                                                        
                                <Link to="/" className="nav-item nav-link active mr3">Home</Link>
                                <Link to="/about" className="nav-item nav-link active mr3">About</Link>            
                                <a className="nav-item nav-link" href="#">Team</a>
                                <a className="nav-item nav-link" href="#">Join Us</a>                                                                            
                                <a className="nav-item nav-link" href="#">Docs</a>
                            </div>
                        </div>
                    </nav>                                                                     
                </div>                   
        )
    }
}

export default Menu;