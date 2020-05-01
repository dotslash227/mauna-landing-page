import React from 'react';
import "../../styles/blog/home.css"
import Menu from "../../components/Menu";
import Ink from  "../../assets/ink.png"

class BlogHome extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    componentWillMount(){
        console.log("this component will mount")
    }

    render(){
        return(
            <div>
                <Menu showBird />            
                <div className="bloghome-header"></div>                
                <div className="header-title">
                    <p>
                        <img src={Ink} className="ink" alt="ink-logo" />
                        Founder's Speak
                    </p>                   
                </div>
                <div className="row blog-area">
                    <div className="col-2">                                                
                        <ul className="category-list">
                            <li>Engineering</li>
                            <li>Product</li>
                            <li>Research</li>
                            <li>Community</li>
                            <li>Business</li>
                            <li>Design</li>
                            <li>All</li>
                        </ul>
                    </div>
                    <div className="col-10">
                        <p>Hola</p>
                    </div>
                </div>
            </div>
        )        
    }

}

export default BlogHome;