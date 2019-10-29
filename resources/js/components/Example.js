
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Footer from "./Footer/Footer";
import Pane from "./Pane";
import Content from "./Content/Content";
import CreateProduct from "./CreateProduct";
import DisplayProduct from "./DisplayProduct";
import UpdateProduct from "./UpdateProduct";
import MyGlobleSetting from "./MyGlobleSetting";
import TableRow from "./TableRow";
import { BrowserRouter as Router, Route, Link, NavLink, Switch,HashRouter  } from "react-router-dom";
import {  browserHistory } from 'react-router';
export default class Example extends Component {
  render() {
    return (
      <div>
        <Pane  />
        <Content />
        <div id="display">
          <h1> Our Products </h1>

           <Router history={browserHistory}>
            <ul>
              <li>  <Link to="/add-item" className="nav-link">Add products</Link></li>
              <li>  <Link to="/display-item" className="nav-link">List Products</Link></li>
              <li>  <Link to="/edit/:id" className="nav-link">List Products</Link></li>
            </ul>
              
               
                <Route path="/add-item" component={CreateProduct} />
                <Route path="/display-item" component={DisplayProduct} />
                <Route path="/edit/:id" component={UpdateProduct} />

      
          </Router>
        
      </div>
      
</div>
    );
  }
}
 
if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}