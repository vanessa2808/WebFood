import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Pane from "./Pane";
import Login from "./Login/Login";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import Shop from "./Shop/Shop";
import Blog from "./Blog/Blog";
import About from "./About/About";
import Cart from "./Shop/Cart";
import Checkout from "./Shop/Checkout";
import Single_products from "./Shop/Single_products";
import Wishlist from "./Shop/Wishlist";
import Register from "./Login/Register";


class RouterPath extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route  path="/" exact component={Home} />
                      <Route exact path="/Home" component={Home} />
                      <Route exact path="/Login" component={Login} />
                      <Route exact path="/About" component={About} />
                      <Route exact path="/Register" component={Register} />
                      <Route exact path="/Blog" component={Blog} />
                      <Route exact path="/Contact" component={Contact} />
                      <Route exact path="/Cart" component={Cart} />
                      <Route exact path="/Shop" component={Shop} />
                      <Route exact path="/Wishlist" component={Wishlist} />
                      <Route exact path="/Checkout" component={Checkout} />
                      <Route exact path="/Single_products" component={Single_products} />
                </Switch>
            </main>
        )
    }
}

export default RouterPath