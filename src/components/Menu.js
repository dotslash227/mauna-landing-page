// Menu.js for top navigation for mauna landing page
// Dependencies: React. Styles -> menu.css
import React from 'react';
import "../styles/menu.css"

class Menu extends React.Component{
    constructor(props){
        super(props);        
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg">                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mauna-menu" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <a className="nav-item nav-link active mr3" href="#">Home</a>
                    <a className="nav-item nav-link" href="#">Team</a>
                    <a className="nav-item nav-link" href="#">Join Us</a>
                    <a className="nav-item nav-link" href="#">Contact Us</a>
                    <a className="nav-item nav-link" href="#">Docs</a>
                    </div>
                </div>
            </nav>            
        )
    }
}

export default Menu;