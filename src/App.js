import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import {
  HashRouter as Router,  
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
          <Route exact path="/team" component={Team} />
        </Switch>
      </Router>      
    )
  }

}

export default App;
