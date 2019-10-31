import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Login from "./Login/Login";
import Footer from "./Footer/Footer";
import Home from "./Home";
import Content from "./Content/Content";
import Contact from "./Contact/Contact";
import Shop from "./Shop/Shop";
import Blog from "./Blog/Blog";
import About from "./About/About";
import Cart from "./Shop/Cart";
import Checkout from "./Shop/Checkout";
import Single_products from "./Shop/Single_products";
import Wishlist from "./Shop/Wishlist";
import Register from "./Login/Register";
import { BrowserRouter as Router, Route, Link, NavLink, Switch,HashRouter  } from "react-router-dom";
class Pane extends Component {
	render() {
		return(
      <div>
        <BrowserRouter>
          <div>
        
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light " id="ftco-navbar">
          <div className="container">
            <a className="navbar-brand" href="index.html">Vegefoods</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="oi oi-menu" /> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active"><Link to="/Home" className="nav-link">Home</Link></li>
                <li className="nav-item active"><Link to="/Shop" className="nav-link">Shop</Link></li>
                <li className="nav-item"><Link to="/About" className="nav-link">About</Link></li>
                <li className="nav-item"><Link to="/Blog" className="nav-link">Blog</Link></li>
                <li className="nav-item"><Link to="/Contact" className="nav-link">Contact</Link></li>
                

                <li className="nav-item cta cta-colored"><Link to="/Cart" className="nav-link"><span className="icon-shopping_cart" />[0]</Link></li>
              </ul>
              <Route exact path="/"  component={Home} />
                      <Route exact path="/Home" component={Home} />
                      <Route exact path="/About" component={About} />
                      <Route exact path="/Blog" component={Blog} />
                      <Route exact path="/Contact" component={Contact} />
                      <Route exact path="/Cart" component={Cart} />
                      <Route exact path="/Shop" component={Shop} />
                      <Route exact path="/Wishlist" component={Wishlist} />
                      <Route exact path="/Checkout" component={Checkout} />
                      <Route exact path="/Single_products" component={Single_products} />
                  </div>
             </div>
          </nav>
       </div>
    </BrowserRouter>
  </div>
  
		);
	}
}


export default Pane;