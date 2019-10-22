import React from 'react';  
import Header from '../components/header/Header.jsx';
import Footer from '../components/footer/Footer.js';
import About from '../container/about';
import Home from '../container/home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const AppRouter =()=> {
    return (
      <Router>
        <Header /> 
        <Switch>
          <Route exact path="/about" component={About} />  
          <Route exact path="/" component={Home} />  
        </Switch>
        <Footer /> 
      </Router>
    );
  }

  export default AppRouter;