import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Home from './pages/Home';
import About from './pages/About';
import {
  BrowserRouter as Router,  
  Switch, Route
} from "react-router-dom";

class App extends React.Component{

  render(){
    return(
      <Router>            
        <Menu />    
        <Switch>          
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>      
    )
  }

}

export default App;
