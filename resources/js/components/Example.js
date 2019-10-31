
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
import Pane1 from "./Pane1";
import { BrowserRouter as Router, Route, Link, NavLink, Switch,HashRouter  } from "react-router-dom";
import {  browserHistory } from 'react-router';
export default class Example extends Component {
  render() {
    return (
      <div>
        <Pane1 />
        <Pane  />
        <Content />
        <Footer />
    </div>
    );
  }
}
 
if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}