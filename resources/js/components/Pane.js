import React, {Component} from 'react';
import Home from "./home";
import Content from "./content/content";
import Contact from "./contact/contact";
import Product from "./product/product";
import Blog from "./blog/blog";
import About from "./about/about";

import Login from "./Login/Login";
import Register from "./Register/Register";
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";
class Pane extends Component {
  render() {
    return(
   <div id="wrapper">
        <Router>
          <div>
        <div className="py-1 bg-primary">
          <div className="container">
            <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
              <div className="col-lg-12 d-block">
                <div className="row d-flex">
                  <div className="col-md pr-4 d-flex topper align-items-center">
                    <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-phone2" /></div>
                    <span className="text">+ 1235 2355 98</span>
                  </div>
                  <div className="col-md pr-4 d-flex topper align-items-center">
                    <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-paper-plane" /></div>
                    <span className="text">yenrion9941@email.com</span>
                  </div>
                  <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
                    <span className="text">3-5 Business days delivery &amp; Free Returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
          <div className="container">
            <a className="navbar-brand" href="index.html">Vegefoods</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="oi oi-menu" /> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active"><Link to="/Home" className="nav-link">Home</Link></li>
                <li className="nav-item"><Link to="/Product" className="nav-link">Product</Link></li>
                <li className="nav-item"><Link to="/About" className="nav-link">About</Link></li>
                <li className="nav-item"><Link to="/Blog" className="nav-link">Blog</Link></li>
                <li className="nav-item"><Link to="/Contact" className="nav-link">Contact</Link></li>
               
                <li className="nav-item cta cta-colored"><Link to="/Cart" className="nav-link"><span className="icon-shopping_cart" />[0]</Link></li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
        <Switch>
          <Route  path="/" exact component={Home} />
          <Route exact path="/Home" component={Home} />
          
          <Route exact path="/About" component={About} />
         <Route exact path="/Product" component={Product} />
          <Route exact path="/Blog" component={Blog} />
          <Route exact path="/Contact" component={Contact} />
         
          

        </Switch>
      </Router>

        
        
       
       
      
     
       
      </div>
    );
  }
}


export default Pane;
