import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Pane from "./Pane";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Shop from "./components/Shop/Shop";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";
import Cart from "./components/Shop/Cart";
import Checkout from "./components/Shop/Checkout";
import Single_products from "./components/Shop/Single_products";
import Wishlist from "./components/Shop/Wishlist";
import Register from "./components/Login/Register";


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