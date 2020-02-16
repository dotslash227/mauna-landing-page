import React from 'react';
import '../styles/emailInput.css';

class EmailInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(            
            <div className="text-center email-form">
                <input type="text" class="good-input" placeholder="Enter Email Address" />
            </div>            
        )
    }    
}

export default EmailInput;